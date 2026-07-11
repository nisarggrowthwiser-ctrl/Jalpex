<?php
/**
 * news.php — Hostinger / any PHP shared-hosting version of the news API.
 *
 * Sources:
 *   1. Google News RSS — trade/export/customs keyword search.
 *      Always available 24/7. Proper XML; no JavaScript needed.
 *   2. PIB HTML — business-hour supplementation (page resets at midnight IST).
 *
 * Caches result in news-cache.json for CACHE_SECONDS.
 * Access via: https://your-domain.com/news.php
 */

/* ------------------------------------------------------------------ config */

const CACHE_SECONDS = 10800;       // 3 hours
const MAX_ITEMS     = 25;
define('CACHE_FILE', __DIR__ . '/news-cache.json');

const GNEWS_URLS = [
    "https://news.google.com/rss/search?q=India+%22Ministry+of+Commerce%22+OR+DGFT+OR+CBIC+OR+%22export+policy%22+OR+%22customs+duty%22+OR+%22import+tariff%22+OR+%22trade+notice%22&hl=en-IN&gl=IN&ceid=IN:en",
    "https://news.google.com/rss/search?q=India+export+import+customs+DGFT+trade&hl=en-IN&gl=IN&ceid=IN:en",
];

const PIB_URLS = [
    'https://pib.gov.in/allRel.aspx?reg=3&lang=1',
    'https://www.pib.gov.in/allRel.aspx?reg=3&lang=1',
];

const KEYWORD_PATTERN =
    '/(export|import|foreign.?trade|trade.?polic|customs|tariff|dgft|icegate|cbic|niryat|\bfta\b|free.?trade|duty|drawback|\bgst\b|anti.?dump|safeguard|countervail|commerce.?industr|spice|agri|farm|grain|pulse|seed|textile|handloom|handicraft|commodity|crop)/i';

$MINISTRY_PATTERNS = [
    '/commerce\s*(&(amp;)?|and)\s*industry/i',
    '/ministry\s+of\s+finance/i',
    '/agriculture/i',
    '/food\s+process/i',
    '/textiles/i',
];

/* ------------------------------------------------------------------ helpers */

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
            ],
        ]);
        $body = curl_exec($ch);
        $code = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
        $err  = curl_error($ch);
        curl_close($ch);
        if ($body === false || $code >= 400) {
            throw new RuntimeException("$url → HTTP $code $err");
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

function news_clean_text(string $s): string
{
    $s = preg_replace('/<[^>]*>/', ' ', $s);
    $s = html_entity_decode($s, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    return trim(preg_replace('/\s+/u', ' ', $s));
}

/* -------------------------------------------------------- Source 1: Google News RSS */

function news_fetch_gnews(): array
{
    $xml = news_fetch_first(GNEWS_URLS);
    $items = [];

    if (!preg_match_all('/<item>([\s\S]*?)<\/item>/i', $xml, $blocks)) return $items;

    foreach ($blocks[1] as $block) {
        // Title
        if (!preg_match('/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>|<title>([\s\S]*?)<\/title>/i', $block, $tm)) continue;
        $title = news_clean_text($tm[1] ?: $tm[2]);
        if (!$title || mb_strlen($title) < 20) continue;

        // Keyword filter
        if (!preg_match(KEYWORD_PATTERN, $title)) continue;

        // Link
        if (!preg_match('/<link>(https?:[\s\S]*?)<\/link>|<guid[^>]*>(https?:[\s\S]*?)<\/guid>/i', $block, $lm)) continue;
        $url = trim($lm[1] ?: $lm[2]);

        // Date
        $date = null;
        if (preg_match('/<pubDate>([\s\S]*?)<\/pubDate>/i', $block, $dm)) {
            $ts = strtotime(trim($dm[1]));
            if ($ts) $date = date('Y-m-d', $ts);
        }

        // Source
        $source = 'Google News';
        if (preg_match('/<source[^>]*><!\[CDATA\[([\s\S]*?)\]\]>|<source[^>]*>([\s\S]*?)<\/source>/i', $block, $sm)) {
            $source = news_clean_text($sm[1] ?: $sm[2]);
        }

        foreach ($items as $it) if ($it['url'] === $url) continue 2;

        $items[] = ['source' => $source, 'ministry' => null, 'title' => $title, 'url' => $url, 'date' => $date];
        if (count($items) >= 20) break;
    }

    return $items;
}

/* -------------------------------------------------------- Source 2: PIB HTML */

function news_fetch_pib(array $ministryPatterns): array
{
    $raw  = news_fetch_first(PIB_URLS);
    $html = preg_replace('/<script[\s\S]*?<\/script>/i', '', $raw);
    $html = preg_replace('/<style[\s\S]*?<\/style>/i',   '', $html);

    // Ministry headings
    $headings = [];
    if (preg_match_all('/<h[1-6][^>]*>([^<]{5,})<\/h[1-6]>/i', $html, $hm, PREG_OFFSET_CAPTURE | PREG_SET_ORDER)) {
        foreach ($hm as $h) {
            $text = news_clean_text($h[1][0]);
            if (preg_match('/(ministry|department|office|secretariat|commission|niti)/i', $text)) {
                $headings[] = ['pos' => $h[0][1], 'text' => $text];
            }
        }
    }

    $items = [];
    // [^<]* captures text directly after > without crossing tag boundaries
    if (preg_match_all(
        '/href=["\']([^"\']*PRID=(\d+)[^"\']*)["\'][^>]*>([^<]{10,})/i',
        $html, $am, PREG_OFFSET_CAPTURE | PREG_SET_ORDER
    )) {
        foreach ($am as $a) {
            $title = news_clean_text($a[3][0]);
            if (!$title || mb_strlen($title) < 12) continue;

            $url = html_entity_decode($a[1][0], ENT_QUOTES, 'UTF-8');
            if (str_starts_with($url, '/')) $url = 'https://pib.gov.in' . $url;
            if (!preg_match('/^https?:/i', $url)) $url = 'https://pib.gov.in/' . ltrim($url, './');

            $prid = $a[2][0];
            $pos  = $a[0][1];

            $ministry = '';
            foreach ($headings as $h) {
                if ($h['pos'] < $pos) $ministry = $h['text'];
                else break;
            }

            $ministryMatch = false;
            foreach ($ministryPatterns as $re) {
                if (preg_match($re, $ministry)) { $ministryMatch = true; break; }
            }
            if (!$ministryMatch && !preg_match(KEYWORD_PATTERN, $title)) continue;

            foreach ($items as $it) if ($it['prid'] === $prid) continue 2;

            $items[] = [
                'source'   => 'PIB',
                'ministry' => $ministry ?: 'Press Information Bureau',
                'title'    => $title,
                'url'      => $url,
                'prid'     => $prid,
                'date'     => date('Y-m-d'),
            ];
        }
    }

    return $items; // may be empty at night — expected
}

/* -------------------------------------------------- build + cache + respond */

function news_build(array $ministryPatterns): array
{
    $items  = [];
    $errors = [];
    $seen   = [];

    try { $items = array_merge($items, news_fetch_gnews()); }
    catch (Throwable $e) { $errors[] = 'GoogleNews: ' . $e->getMessage(); }

    try { $items = array_merge($items, news_fetch_pib($ministryPatterns)); }
    catch (Throwable $e) { $errors[] = 'PIB: ' . $e->getMessage(); }

    // De-duplicate by URL
    $unique = [];
    foreach ($items as $it) {
        if (!isset($seen[$it['url']])) { $seen[$it['url']] = true; $unique[] = $it; }
    }

    $out = [
        'updatedAt' => gmdate('c'),
        'count'     => min(count($unique), MAX_ITEMS),
        'items'     => array_slice($unique, 0, MAX_ITEMS),
    ];
    if ($errors) $out['errors'] = $errors;
    return $out;
}

function news_respond(array $ministryPatterns): void
{
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Cache-Control: public, max-age=900');

    if (is_readable(CACHE_FILE) && (time() - filemtime(CACHE_FILE)) < CACHE_SECONDS) {
        readfile(CACHE_FILE);
        return;
    }

    $out = news_build($ministryPatterns);

    if (empty($out['items']) && is_readable(CACHE_FILE)) {
        readfile(CACHE_FILE);
        return;
    }

    $json = json_encode($out, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    @file_put_contents(CACHE_FILE, $json, LOCK_EX);
    echo $json;
}

if (PHP_SAPI !== 'cli') {
    news_respond($MINISTRY_PATTERNS);
}
