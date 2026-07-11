/**
 * /api/news — Vercel serverless function
 *
 * Sources:
 *   1. Google News RSS — trade/export/customs keyword search across all
 *      Indian government and media sources. Always available 24/7.
 *      Returns proper XML; no JavaScript required.
 *   2. PIB HTML — fallback for business-hour supplementation.
 *      PIB's all-releases page only has content during Indian business hours
 *      (the daily batch resets at midnight IST). Works when available.
 *
 * NOTE: DGFT's notification page loads its list via JavaScript/AJAX —
 * the initial HTML is an empty shell and cannot be scraped server-side.
 * Google News aggregates DGFT/CBIC/commerce notices when they are published.
 *
 * Debug: GET /api/news?debug=1
 */

const CACHE_SECONDS = 10800; // 3 hours
const MAX_ITEMS     = 25;

/* ── Sources ──────────────────────────────────────────────────────────────── */

// Google News RSS: reliable XML feed, no JS, works 24/7
const GNEWS_URLS = [
  // Primary: targeted at Indian government trade news
  "https://news.google.com/rss/search?q=India+%22Ministry+of+Commerce%22+OR+DGFT+OR+CBIC+OR+%22export+policy%22+OR+%22customs+duty%22+OR+%22import+tariff%22+OR+%22trade+notice%22&hl=en-IN&gl=IN&ceid=IN:en",
  // Fallback: broader India trade/export news
  "https://news.google.com/rss/search?q=India+export+import+customs+DGFT+trade&hl=en-IN&gl=IN&ceid=IN:en",
];

// PIB all-releases page (English). Has content 9am–midnight IST; empty at night.
const PIB_URLS = [
  "https://pib.gov.in/allRel.aspx?reg=3&lang=1",
  "https://www.pib.gov.in/allRel.aspx?reg=3&lang=1",
];

/* ── Filters ──────────────────────────────────────────────────────────────── */

const KEYWORD_PATTERN =
  /(export|import|foreign.?trade|trade.?polic|customs|tariff|dgft|icegate|cbic|niryat|\bfta\b|free.?trade|duty|drawback|\bgst\b|anti.?dump|safeguard|countervail|commerce.?industr|spice|agri|farm|grain|pulse|seed|textile|handloom|handicraft|commodity|crop)/i;

const MINISTRY_PATTERNS = [
  /commerce\s*(&(amp;)?|and)\s*industry/i,
  /ministry\s+of\s+finance/i,
  /agriculture/i,
  /food\s+process/i,
  /textiles/i,
];

/* ── Fetch helpers ────────────────────────────────────────────────────────── */

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "en-IN,en;q=0.9,hi;q=0.8",
};

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function cleanText(s) {
  return decodeEntities(s.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

async function fetchText(url) {
  const res = await fetch(url, { headers: FETCH_HEADERS, redirect: "follow" });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  return res.text();
}

async function fetchFirst(urls) {
  let lastErr;
  for (const url of urls) {
    try { return await fetchText(url); } catch (e) { lastErr = e; }
  }
  throw lastErr;
}

/* ── Source 1: Google News RSS ────────────────────────────────────────────── */

async function fetchGoogleNews() {
  const xml = await fetchFirst(GNEWS_URLS);
  const items = [];

  // RSS <item> elements
  const itemRe = /<item>([\s\S]*?)<\/item>/gi;
  let m;

  while ((m = itemRe.exec(xml))) {
    const block = m[1];

    // Title — may be CDATA-wrapped
    const titleM =
      block.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/i) ||
      block.match(/<title>([\s\S]*?)<\/title>/i);
    if (!titleM) continue;
    const title = cleanText(titleM[1]);
    if (!title || title.length < 20) continue;

    // Keep only trade-related articles
    if (!KEYWORD_PATTERN.test(title)) continue;

    // Link
    const linkM =
      block.match(/<link>(https?:[\s\S]*?)<\/link>/i) ||
      block.match(/<guid[^>]*>(https?:[\s\S]*?)<\/guid>/i);
    if (!linkM) continue;
    const url = linkM[1].trim();

    // Date
    let date = null;
    const dateM = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/i);
    if (dateM) {
      try { date = new Date(dateM[1].trim()).toISOString().slice(0, 10); } catch (_) {}
    }

    // Source outlet
    const srcM = block.match(/<source[^>]*><!\[CDATA\[([\s\S]*?)\]\]><\/source>/i) ||
                 block.match(/<source[^>]*>([\s\S]*?)<\/source>/i);
    const source = srcM ? cleanText(srcM[1]) : "Google News";

    if (!items.some((it) => it.url === url)) {
      items.push({ source, ministry: null, title, url, date });
    }
    if (items.length >= 20) break;
  }

  return items;
}

/* ── Source 2: PIB HTML (business-hours fallback) ─────────────────────────── */

async function fetchPib() {
  const html = (await fetchFirst(PIB_URLS))
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  // Ministry headings
  const headings = [];
  const hRe = /<h[1-6][^>]*>([^<]{5,})<\/h[1-6]>/gi;
  let m;
  while ((m = hRe.exec(html))) {
    const text = cleanText(m[1]);
    if (/(ministry|department|office|secretariat|commission|niti)/i.test(text))
      headings.push({ pos: m.index, text });
  }

  const items = [];

  // PRID links — capture text directly after > using [^<]* (stops at next tag)
  const aRe = /href=["']([^"']*PRID=(\d+)[^"']*)["'][^>]*>([^<]{10,})/gi;
  while ((m = aRe.exec(html))) {
    const title = cleanText(m[3]);
    if (!title || title.length < 12) continue;

    let url = decodeEntities(m[1]);
    if (url.startsWith("/")) url = "https://pib.gov.in" + url;
    if (!/^https?:/i.test(url)) url = "https://pib.gov.in/" + url.replace(/^\.?\//, "");

    const prid = m[2];

    // Nearest ministry heading above this link
    let ministry = "";
    for (const h of headings) {
      if (h.pos < m.index) ministry = h.text;
      else break;
    }

    const ministryMatch = MINISTRY_PATTERNS.some((re) => re.test(ministry));
    const keywordMatch  = KEYWORD_PATTERN.test(title);
    if (!ministryMatch && !keywordMatch) continue;

    if (!items.some((it) => it.prid === prid)) {
      items.push({
        source: "PIB",
        ministry: ministry || "Press Information Bureau",
        title,
        url,
        prid,
        date: new Date().toISOString().slice(0, 10),
      });
    }
  }

  return items; // may be empty at night — that is expected
}

/* ── Handler ──────────────────────────────────────────────────────────────── */

module.exports = async (req, res) => {

  /* Debug mode (/api/news?debug=1) */
  if (req.query && req.query.debug) {
    const report = {};

    // Test Google News RSS
    try {
      const xml = await fetchFirst(GNEWS_URLS);
      const itemCount = (xml.match(/<item>/gi) || []).length;
      const sample = xml.slice(0, 1500);
      report.gnews = { ok: true, length: xml.length, itemCount, sample };
    } catch (e) {
      report.gnews = { ok: false, error: e.message };
    }

    // Test PIB
    try {
      const html = await fetchFirst(PIB_URLS);
      const stripped = html.replace(/<script[\s\S]*?<\/script>/gi,"").replace(/<style[\s\S]*?<\/style>/gi,"");
      const pridLinks = (html.match(/PRID=\d+/gi) || []).length;
      report.pib = {
        ok: true, rawLength: html.length, strippedLength: stripped.length,
        pridLinks, anchors: (html.match(/<a[\s>]/gi)||[]).length,
        headings: (html.match(/<h[1-6][\s>]/gi)||[]).length,
      };
    } catch (e) {
      report.pib = { ok: false, error: e.message };
    }

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json(report);
  }

  /* Normal mode */
  const [gnews, pib] = await Promise.allSettled([fetchGoogleNews(), fetchPib()]);

  const items  = [];
  const errors = [];

  if (gnews.status === "fulfilled") items.push(...gnews.value);
  else errors.push("GoogleNews: " + gnews.reason.message);

  if (pib.status === "fulfilled") items.push(...pib.value);
  else errors.push("PIB: " + pib.reason.message);

  // De-duplicate by URL
  const seen = new Set();
  const unique = items.filter((it) => {
    if (seen.has(it.url)) return false;
    seen.add(it.url);
    return true;
  });

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=86400`
  );

  res.status(200).json({
    updatedAt: new Date().toISOString(),
    count: Math.min(unique.length, MAX_ITEMS),
    items: unique.slice(0, MAX_ITEMS),
    errors: errors.length ? errors : undefined,
  });
};
