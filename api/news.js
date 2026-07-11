/**
 * /api/news — Vercel serverless function
 *
 * Sources:
 *   1. PIB (Press Information Bureau) — daily English press releases
 *   2. DGFT (Directorate General of Foreign Trade) — notifications/public notices
 *
 * Debug: /api/news?debug=1  — shows raw page stats to diagnose parser issues
 */

const CACHE_SECONDS = 10800; // 3 hours
const MAX_ITEMS = 25;

const PIB_URLS = [
  "https://pib.gov.in/allRel.aspx?reg=3&lang=1",
  "https://www.pib.gov.in/allRel.aspx?reg=3&lang=1",
];

const DGFT_URLS = [
  "https://www.dgft.gov.in/CP/?opt=notification",
  "https://dgft.gov.in/CP/?opt=notification",
];

// Trade-related keyword filter applied to PIB titles
const KEYWORD_PATTERN =
  /(export|import|foreign.?trade|trade.?polic|customs|tariff|dgft|icegate|cbic|niryat|\bfta\b|free.?trade|duty.?drawback|\bgst\b|anti.?dump|safeguard|countervail|commerce.?industr|spice|agriculture|agri|farm|grain|pulse|seed|spice|textile|handloom|handicraft|commodity|crop)/i;

// Ministry patterns for PIB heading attribution
const MINISTRY_PATTERNS = [
  /commerce\s*(&(amp;)?|and)\s*industry/i,
  /ministry\s+of\s+finance/i,
  /agriculture/i,
  /food\s+processing/i,
  /textiles/i,
];

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

function cleanText(s) {
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

/* -------------------------------------------------------------------- PIB */

async function fetchPib() {
  const html = (await fetchFirst(PIB_URLS))
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  // ── Ministry heading positions (to attribute releases to a ministry)
  const headings = [];
  const hRe = /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi;
  let m;
  while ((m = hRe.exec(html))) {
    const text = cleanText(m[1]);
    if (/(ministry|department|office|secretariat|commission|niti)/i.test(text))
      headings.push({ pos: m.index, text });
  }

  // ── PRID links — use [^<]* to grab text directly after > without crossing a tag
  //    This is far more reliable than [\s\S]*?<\/a> on complex HTML
  const items = [];
  const aRe = /href=["']([^"']*PRID=(\d+)[^"']*)["'][^>]*>([^<]{8,})/gi;

  while ((m = aRe.exec(html))) {
    const title = cleanText(m[3]);
    if (!title || title.length < 12) continue;

    let url = decodeEntities(m[1]);
    if (url.startsWith("/")) url = "https://pib.gov.in" + url;
    if (!/^https?:/i.test(url)) url = "https://pib.gov.in/" + url.replace(/^\.?\//, "");

    const prid = m[2];

    // Find nearest ministry heading above this link
    let ministry = "";
    for (const h of headings) {
      if (h.pos < m.index) ministry = h.text;
      else break;
    }

    const ministryMatch = MINISTRY_PATTERNS.some((re) => re.test(ministry));
    const keywordMatch = KEYWORD_PATTERN.test(title);
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

  // ── Fallback: if keyword filter removes everything, return first 8 unfiltered
  if (items.length === 0) {
    const aRe2 = /href=["']([^"']*PRID=(\d+)[^"']*)["'][^>]*>([^<]{12,})/gi;
    while ((m = aRe2.exec(html))) {
      const title = cleanText(m[3]);
      if (!title || title.length < 12) continue;
      let url = decodeEntities(m[1]);
      if (url.startsWith("/")) url = "https://pib.gov.in" + url;
      if (!/^https?:/i.test(url)) url = "https://pib.gov.in/" + url.replace(/^\.?\//, "");
      const prid = m[2];
      if (!items.some((it) => it.prid === prid)) {
        items.push({ source: "PIB", ministry: "Press Information Bureau", title, url, prid, date: new Date().toISOString().slice(0, 10) });
      }
      if (items.length >= 8) break;
    }
  }

  return items;
}

/* ------------------------------------------------------------------- DGFT */

async function fetchDgft() {
  const html = (await fetchFirst(DGFT_URLS))
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const items = [];

  // Use [^<]* to get text directly after > without crossing tags.
  // DGFT has 377 anchors — filter by href pattern OR title content.
  const aRe = /href=["']([^"']+)["'][^>]*>([^<]{12,})/gi;
  let m;

  while ((m = aRe.exec(html))) {
    const rawHref = m[1].trim();
    const title = cleanText(m[2]);

    if (!title || title.length < 12) continue;

    // Accept if title OR href suggests a notification / trade document
    const titleOk = /(notification|public.?notice|trade.?notice|circular|amendment|policy|export|import|tariff|ftp|anti.?dump)/i.test(title);
    const hrefOk  = /(notification|circular|public.?notice|trade.?notice|download|pdf|policy)/i.test(rawHref);
    if (!titleOk && !hrefOk) continue;

    // Skip navigation items (very short or generic)
    if (/^(home|about|contact|login|search|back|next|prev|sitemap|skip)$/i.test(title)) continue;

    let url = decodeEntities(rawHref);
    if (url.startsWith("/"))  url = "https://www.dgft.gov.in" + url;
    else if (url.startsWith("?")) url = "https://www.dgft.gov.in/CP/" + url;
    else if (!/^https?:/i.test(url)) continue;

    if (!items.some((it) => it.url === url)) {
      items.push({
        source: "DGFT",
        ministry: "Ministry of Commerce & Industry",
        title,
        url,
        date: new Date().toISOString().slice(0, 10),
      });
    }
    if (items.length >= 15) break;
  }

  return items.slice(0, 10);
}

/* ------------------------------------------------------------------ handler */

module.exports = async (req, res) => {
  // Debug mode — visit /api/news?debug=1 to diagnose
  if (req.query && req.query.debug) {
    const report = {};
    for (const [name, urls] of [["pib", PIB_URLS], ["dgft", DGFT_URLS]]) {
      try {
        const html = await fetchFirst(urls);
        const stripped = html
          .replace(/<script[\s\S]*?<\/script>/gi, "")
          .replace(/<style[\s\S]*?<\/style>/gi, "");

        // Count items our NEW regex would find
        const aRe = /href=["']([^"']+)["'][^>]*>([^<]{12,})/gi;
        const linkSamples = [];
        let lm;
        while ((lm = aRe.exec(stripped)) && linkSamples.length < 5) {
          linkSamples.push({ href: lm[1].slice(0, 80), text: lm[2].slice(0, 80).trim() });
        }

        report[name] = {
          ok: true,
          rawLength: html.length,
          strippedLength: stripped.length,
          pridLinks: (html.match(/PRID=\d+/gi) || []).length,
          anchors: (html.match(/<a[\s>]/gi) || []).length,
          headings: (html.match(/<h[1-6][\s>]/gi) || []).length,
          linkSamples,
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
  if (pib.status === "fulfilled")  items.push(...pib.value);
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
