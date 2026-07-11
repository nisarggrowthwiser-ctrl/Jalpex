/**
 * /api/news — Vercel serverless function
 *
 * Sources (all server-rendered HTML — no JS required):
 *   1. PIB (Press Information Bureau) — daily English press releases
 *      filtered to Ministry of Commerce & Industry, Ministry of Finance,
 *      plus trade-keyword matches from any ministry.
 *   2. DGFT (Directorate General of Foreign Trade) — notifications page.
 *      commerce.gov.in migrated to a JS SPA and no longer has a scrapable
 *      press-release URL — DGFT is the direct replacement.
 *
 * Vercel CDN caches the response for CACHE_SECONDS so government sites
 * are only hit a few times per day — no cron job needed.
 */

const CACHE_SECONDS = 10800; // 3 hours
const MAX_ITEMS = 25;

const PIB_URLS = [
  "https://pib.gov.in/allRel.aspx?reg=3&lang=1",
  "https://www.pib.gov.in/allRel.aspx?reg=3&lang=1",
];

// DGFT notifications page — server-rendered, reliably scrapeable
const DGFT_URLS = [
  "https://www.dgft.gov.in/CP/?opt=notification",
  "https://dgft.gov.in/CP/?opt=notification",
];

// PIB groups releases under ministry headings — keep these ministries
const MINISTRY_PATTERNS = [
  /commerce\s*(&(amp;)?|and)\s*industry/i, // Ministry of Commerce & Industry
  /ministry\s+of\s+finance/i,              // Ministry of Finance (CBIC, customs)
];

// Also keep any release whose title matches trade keywords
const KEYWORD_PATTERN =
  /(export|import|foreign trade|trade polic|customs|tariff|dgft|icegate|cbic|niryat|\bfta\b|free trade|duty drawback|\bgst\b|e-?commerce export|anti.?dump|safeguard|countervail)/i;

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-IN,en;q=0.9,hi;q=0.8",
  "Upgrade-Insecure-Requests": "1",
};

/* ------------------------------------------------------------------ helpers */

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function stripTags(s) {
  return decodeEntities(s.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

async function fetchText(url) {
  const res = await fetch(url, { headers: FETCH_HEADERS, redirect: "follow" });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.text();
}

async function fetchFirst(urls) {
  let lastErr;
  for (const url of urls) {
    try { return await fetchText(url); } catch (e) { lastErr = e; }
  }
  throw lastErr;
}

/* ------------------------------------------------------------------ PIB */

async function fetchPib() {
  const html = (await fetchFirst(PIB_URLS))
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  // Ministry headings (to attribute each release to a ministry)
  const headings = [];
  const hRe = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = hRe.exec(html))) {
    const text = stripTags(m[2]);
    if (/(ministry|department|office|secretariat|commission|niti)/i.test(text))
      headings.push({ pos: m.index, text });
  }

  // Links — PIB uses PRID= query param across several page names
  const items = [];
  const aRe = /<a[^>]+href=["']([^"']*PRID=\d+[^"']*)[^>]*>([\s\S]*?)<\/a>/gi;
  while ((m = aRe.exec(html))) {
    const title = stripTags(m[2]);
    if (!title || title.length < 15) continue;

    let url = decodeEntities(m[1]);
    if (url.startsWith("/")) url = "https://pib.gov.in" + url;
    if (!/^https?:/i.test(url)) url = "https://pib.gov.in/" + url.replace(/^\.?\//, "");

    let ministry = "";
    for (const h of headings) {
      if (h.pos < m.index) ministry = h.text;
      else break;
    }

    const ministryMatch = MINISTRY_PATTERNS.some((re) => re.test(ministry));
    const keywordMatch = KEYWORD_PATTERN.test(title);
    if (!ministryMatch && !keywordMatch) continue;

    const prid = (url.match(/PRID=(\d+)/i) || [])[1];
    if (!items.some((it) => it.url === url || (prid && it.prid === prid))) {
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
  return items;
}

/* ------------------------------------------------------------------ DGFT */

function parseLooseDate(text) {
  const m1 = text.match(/(\d{1,2})[-\s\/]([A-Za-z]{3,9})[-\s\/](\d{4})/);
  if (m1) {
    const d = new Date(`${m1[1]} ${m1[2]} ${m1[3]}`);
    if (!isNaN(d)) return d.toISOString().slice(0, 10);
  }
  const m2 = text.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (m2) {
    const d = new Date(`${m2[3]}-${m2[2].padStart(2, "0")}-${m2[1].padStart(2, "0")}`);
    if (!isNaN(d)) return d.toISOString().slice(0, 10);
  }
  return null;
}

async function fetchDgft() {
  const html = (await fetchFirst(DGFT_URLS))
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const items = [];

  // DGFT notification rows — each row has a serial number, date, and a link
  // Pattern: table rows or list items containing a link to a PDF or page
  const rowRe = /<(tr|li|div)[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = rowRe.exec(html))) {
    const row = m[2];
    const a = row.match(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
    if (!a) continue;

    const title = stripTags(a[2]);
    if (!title || title.length < 15) continue;

    // Filter to trade-related entries
    if (!KEYWORD_PATTERN.test(title) &&
        !/(notification|circular|policy|amendment|dgft|trade|export|import|tariff|duty|ftp)/i.test(title))
      continue;

    let url = decodeEntities(a[1]);
    if (url.startsWith("/")) url = "https://www.dgft.gov.in" + url;
    if (url.startsWith("?")) url = "https://www.dgft.gov.in/CP/" + url;
    if (!/^https?:/i.test(url)) continue;

    const date = parseLooseDate(stripTags(row));

    if (!items.some((it) => it.url === url)) {
      items.push({
        source: "DGFT",
        ministry: "Ministry of Commerce & Industry",
        title,
        url,
        date,
      });
    }
    if (items.length >= 15) break;
  }

  items.sort((x, y) => (y.date || "").localeCompare(x.date || ""));
  return items.slice(0, 10);
}

/* ------------------------------------------------------------------ handler */

module.exports = async (req, res) => {
  // Debug mode: /api/news?debug=1
  if (req.query && req.query.debug) {
    const report = {};
    for (const [name, urls] of [["pib", PIB_URLS], ["dgft", DGFT_URLS]]) {
      try {
        const html = await fetchFirst(urls);
        report[name] = {
          ok: true,
          length: html.length,
          pridLinks: (html.match(/PRID=\d+/gi) || []).length,
          anchors: (html.match(/<a[\s>]/gi) || []).length,
          headings: (html.match(/<h[1-6][\s>]/gi) || []).length,
          sample: html.slice(0, 1200),
        };
      } catch (e) {
        report[name] = { ok: false, error: e.message };
      }
    }
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json(report);
  }

  const [pib, dgft] = await Promise.allSettled([fetchPib(), fetchDgft()]);

  const items = [];
  const errors = [];
  if (pib.status === "fulfilled") items.push(...pib.value);
  else errors.push("PIB: " + pib.reason.message);
  if (dgft.status === "fulfilled") items.push(...dgft.value);
  else errors.push("DGFT: " + dgft.reason.message);

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=86400`
  );

  res.status(200).json({
    updatedAt: new Date().toISOString(),
    count: Math.min(items.length, MAX_ITEMS),
    items: items.slice(0, MAX_ITEMS),
    errors: errors.length ? errors : undefined,
  });
};
