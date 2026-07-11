<?php
/**
 * news.php — Hostinger / any PHP shared-hosting version of the news API.
 *
 * Sources:
 *   1. PIB (Press Information Bureau) — daily English press releases
 *   2. DGFT (Directorate General of Foreign Trade) — notifications page
 *      NOTE: commerce.gov.in migrated to a JS SPA — its /press-releases/
 *      URL returns 404. DGFT is the working replacement.
 *
 * Caches result in news-cache.json for CACHE_SECONDS.
 */

/* ------------------------------------------------------------------ config */

const CACHE_SECONDS = 10800;
const MAX_ITEMS     = 25;
define('CACHE_FILE', __DIR__ . '/news-cache.json');

const PIB_URLS = [
    'https://pib.gov.in/allRel.aspx?reg=3&lang=1',
    'https://www.pib.gov.in/allRel.aspx?reg=3&lang=1',
];
const DGFT_URLS = [
    'https://www.dgft.gov.in/CP/?opt=notification',
    'https://dgft.gov.in/CP/?opt=notification',
];

$MINISTRY_PATTERNS = [
    '/commerce\s*(&(amp;)?|and)\s*industry/i',
    '/ministry\s+of\s+finance/i',
];

const KEYWORD_PATTERN =
    '/(export|import|foreign trade|trade polic|customs|tariff|dgft|icegate|cbic|niryat|\bfta\b|free trade|duty drawback|\bgst\b|e-?commerce export|anti.?dump|safeguard|countervail)/i';

const DGFT_ROW_PATTERN =
    '/(notification|circular|policy|amendment|dgft|trade|export|import|tariff|duty|ftp)/i';

/* ----------------------------------------------------------------- helpers */

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

/* -------------------------------------------------------------------- PIB */

function news_fetch_pib(array $ministryPatterns): array
{
    $html = news_clean_html(news_fetch_first(PIB_URLS));

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
                'ministry' => $ministry ?: 'Press Information Bureau',
                'title'    => $title,
                'url'      => $url,
                'date'     => date('Y-m-d'),
            ];
        }
    }
    return $items;
}

/* ------------------------------------------------------------------- DGFT */

function news_fetch_dgft(): array
{
    $html = news_clean_html(news_fetch_first(DGFT_URLS));

    $items = [];
    if (preg_match_all('/<(tr|li|div)[^>]*>([\s\S]*?)<\/\1>/i', $html, $rm, PREG_SET_ORDER)) {
        foreach ($rm as $r) {
            $row = $r[2];
            if (!preg_match('/<a[^>]+href=["\']([^"\']+)["\'][^>]*>([\s\S]*?)<\/a>/i', $row, $a)) continue;

            $title = news_strip_tags_deep($a[2]);
            if ($title === '' || mb_strlen($title) < 15) continue;

            if (!preg_match(KEYWORD_PATTERN, $title) &&
                !preg_match(DGFT_ROW_PATTERN, $title)) continue;

            $url = html_entity_decode($a[1], ENT_QUOTES, 'UTF-8');
            if (str_starts_with($url, '/'))  $url = 'https://www.dgft.gov.in' . $url;
            if (str_starts_with($url, '?'))  $url = 'https://www.dgft.gov.in/CP/' . $url;
            if (!preg_match('/^https?:/i', $url)) continue;

            foreach ($items as $it) if ($it['url'] === $url) continue 2;

            $items[] = [
                'source'   => 'DGFT',
                'ministry' => 'Ministry of Commerce & Industry',
                'title'    => $title,
                'url'      => $url,
                'date'     => news_parse_loose_date(news_strip_tags_deep($row)),
            ];

            if (count($items) >= 15) break;
        }
    }

    usort($items, fn($x, $y) => strcmp($y['date'] ?? '', $x['date'] ?? ''));
    return array_slice($items, 0, 10);
}

/* -------------------------------------------------- build + cache + respond */

function news_build(array $ministryPatterns): array
{
    $items  = [];
    $errors = [];

    try { $items = array_merge($items, news_fetch_pib($ministryPatterns)); }
    catch (Throwable $e) { $errors[] = 'PIB: ' . $e->getMessage(); }

    try { $items = array_merge($items, news_fetch_dgft()); }
    catch (Throwable $e) { $errors[] = 'DGFT: ' . $e->getMessage(); }

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
