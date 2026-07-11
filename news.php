<?php
/**
 * news.php — Hostinger / any PHP shared-hosting version of the news API.
 *
 * Upload this file next to your HTML files (public_html/).
 * It becomes available at  https://your-domain.com/news.php
 *
 * Same behaviour as the Vercel api/news.js:
 *   - Pulls English press releases from PIB (Ministry of Commerce & Industry,
 *     Ministry of Finance, + trade-keyword matches from any ministry)
 *   - Pulls the commerce.gov.in press-releases list
 *   - Returns merged JSON
 *   - Caches the result in a local file for CACHE_SECONDS, so government
 *     sites are only contacted a few times per day.
 */

/* ---------------------------- config ---------------------------- */

const CACHE_SECONDS = 10800;                 // 3 hours
const MAX_ITEMS     = 25;
define('CACHE_FILE', __DIR__ . '/news-cache.json');

const PIB_URLS = [
    'https://pib.gov.in/allRel.aspx?reg=3&lang=1',
    'https://www.pib.gov.in/allRel.aspx?reg=3&lang=1',
];
const COMMERCE_URLS = [
    'https://www.commerce.gov.in/press-releases/',
    'https://commerce.gov.in/press-releases/',
    'https://www.commerce.gov.in/press-releases',
];

$MINISTRY_PATTERNS = [
    '/commerce\s*(&(amp;)?|and)\s*industry/i',   // Ministry of Commerce & Industry
    '/ministry\s+of\s+finance/i',                // Ministry of Finance (CBIC, customs)
];

const KEYWORD_PATTERN =
    '/(export|import|foreign trade|trade polic|customs|tariff|dgft|icegate|cbic|niryat|\bfta\b|free trade|duty drawback|\bgst\b|e-?commerce export)/i';

/* ---------------------------- helpers ---------------------------- */

if (!function_exists('news_fetch_url')) {
    function news_fetch_url(string $url): string
    {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_MAXREDIRS      => 5,
            CURLOPT_TIMEOUT        => 20,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_USERAGENT      => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36',
            CURLOPT_HTTPHEADER     => [
                'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language: en-IN,en;q=0.9,hi;q=0.8',
                'Upgrade-Insecure-Requests: 1',
            ],
        ]);
        $body = curl_exec($ch);
        $code = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
        $err  = curl_error($ch);
        curl_close($ch);
        if ($body === false || $code >= 400) {
            throw new RuntimeException("$url -> HTTP $code $err");
        }
        return $body;
    }
}

function news_fetch_first(array $urls): string
{
    $lastErr = null;
    foreach ($urls as $url) {
        try { return news_fetch_url($url); }
        catch (Throwable $e) { $lastErr = $e; }
    }
    throw $lastErr;
}

function news_strip_tags_deep(string $s): string
{
    $s = preg_replace('/<[^>]*>/', ' ', $s);
    $s = html_entity_decode($s, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    return trim(preg_replace('/\s+/u', ' ', $s));
}

function news_clean_html(string $html): string
{
    $html = preg_replace('/<script[\s\S]*?<\/script>/i', '', $html);
    return preg_replace('/<style[\s\S]*?<\/style>/i', '', $html);
}

/* ---------------------------- PIB ---------------------------- */

function news_fetch_pib(array $ministryPatterns): array
{
    $html = news_clean_html(news_fetch_first(PIB_URLS));

    // headings with byte offsets — used to find each release's ministry
    $headings = [];
    if (preg_match_all('/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/i', $html, $hm, PREG_OFFSET_CAPTURE | PREG_SET_ORDER)) {
        foreach ($hm as $h) {
            $text = news_strip_tags_deep($h[2][0]);
            if (preg_match('/(ministry|department|office|secretariat|commission|niti)/i', $text)) {
                $headings[] = ['pos' => $h[0][1], 'text' => $text];
            }
        }
    }

    $items = [];
    // PIB uses several page names (incl. misspelled PressReleseDetail.aspx),
    // so match on PRID= only.
    if (preg_match_all(
        '/<a[^>]+href=["\']([^"\']*PRID=\d+[^"\']*)["\'][^>]*>([\s\S]*?)<\/a>/i',
        $html, $am, PREG_OFFSET_CAPTURE | PREG_SET_ORDER
    )) {
        foreach ($am as $a) {
            $title = news_strip_tags_deep($a[2][0]);
            if ($title === '' || mb_strlen($title) < 15) continue;

            $url = html_entity_decode($a[1][0], ENT_QUOTES, 'UTF-8');
            if (str_starts_with($url, '/')) {
                $url = 'https://pib.gov.in' . $url;
            } elseif (!preg_match('/^https?:/i', $url)) {
                $url = 'https://pib.gov.in/' . ltrim($url, './');
            }

            $ministry = '';
            foreach ($headings as $h) {
                if ($h['pos'] < $a[0][1]) $ministry = $h['text'];
                else break;
            }

            $ministryMatch = false;
            foreach ($ministryPatterns as $re) {
                if (preg_match($re, $ministry)) { $ministryMatch = true; break; }
            }
            if (!$ministryMatch && !preg_match(KEYWORD_PATTERN, $title)) continue;

            foreach ($items as $it) if ($it['url'] === $url) continue 2;

            $items[] = [
                'source'   => 'PIB',
                'ministry' => $ministry ?: null,
                'title'    => $title,
                'url'      => $url,
                'date'     => date('Y-m-d'),
            ];
        }
    }
    return $items;
}

/* ---------------------------- commerce.gov.in ---------------------------- */

function news_parse_loose_date(string $text): ?string
{
    if (preg_match('/(\d{1,2})[-\s\/]([A-Za-z]{3,9})[-\s\/](\d{4})/', $text, $m)) {
        $ts = strtotime("{$m[1]} {$m[2]} {$m[3]}");
        if ($ts) return date('Y-m-d', $ts);
    }
    if (preg_match('/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/', $text, $m)) {
        $ts = strtotime("{$m[3]}-{$m[2]}-{$m[1]}");
        if ($ts) return date('Y-m-d', $ts);
    }
    return null;
}

function news_fetch_commerce(): array
{
    $html = news_clean_html(news_fetch_first(COMMERCE_URLS));

    $items = [];
    if (preg_match_all('/<(li|tr|p|div)[^>]*>([\s\S]*?)<\/\1>/i', $html, $rm, PREG_SET_ORDER)) {
        foreach ($rm as $r) {
            $row = $r[2];
            if (!preg_match('/<a[^>]+href=["\']([^"\']+)["\'][^>]*>([\s\S]*?)<\/a>/i', $row, $a)) continue;

            $title = news_strip_tags_deep($a[2]);
            if ($title === '' || mb_strlen($title) < 20) continue;
            if (!preg_match('/(press|release|trade|export|agreement|minister|commerce|\.pdf)/i', $a[1] . ' ' . $title)) continue;

            $url = html_entity_decode($a[1], ENT_QUOTES, 'UTF-8');
            if (str_starts_with($url, '/')) $url = 'https://www.commerce.gov.in' . $url;
            if (!preg_match('/^https?:/i', $url)) continue;

            foreach ($items as $it) if ($it['url'] === $url) continue 2;

            $items[] = [
                'source'   => 'Ministry of Commerce',
                'ministry' => 'Ministry of Commerce & Industry',
                'title'    => $title,
                'url'      => $url,
                'date'     => news_parse_loose_date(news_strip_tags_deep($row)),
            ];
        }
    }

    usort($items, fn($x, $y) => strcmp($y['date'] ?? '', $x['date'] ?? ''));
    return array_slice($items, 0, 10);
}

/* ---------------------------- build + cache + respond ---------------------------- */

function news_build(array $ministryPatterns): array
{
    $items = [];
    $errors = [];

    try { $items = array_merge($items, news_fetch_pib($ministryPatterns)); }
    catch (Throwable $e) { $errors[] = 'PIB: ' . $e->getMessage(); }

    try { $items = array_merge($items, news_fetch_commerce()); }
    catch (Throwable $e) { $errors[] = 'Commerce: ' . $e->getMessage(); }

    $out = [
        'updatedAt' => gmdate('c'),
        'count'     => min(count($items), MAX_ITEMS),
        'items'     => array_slice($items, 0, MAX_ITEMS),
    ];
    if ($errors) $out['errors'] = $errors;
    return $out;
}

function news_respond(array $ministryPatterns): void
{
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Cache-Control: public, max-age=900');

    // serve fresh cache if available
    if (is_readable(CACHE_FILE) && (time() - filemtime(CACHE_FILE)) < CACHE_SECONDS) {
        readfile(CACHE_FILE);
        return;
    }

    $out = news_build($ministryPatterns);

    // if fetching failed completely but an old cache exists, serve the old cache
    if (empty($out['items']) && is_readable(CACHE_FILE)) {
        readfile(CACHE_FILE);
        return;
    }

    $json = json_encode($out, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    @file_put_contents(CACHE_FILE, $json, LOCK_EX);
    echo $json;
}

// Run only when accessed over the web (lets test scripts include this file safely)
if (PHP_SAPI !== 'cli') {
    news_respond($MINISTRY_PATTERNS);
}
