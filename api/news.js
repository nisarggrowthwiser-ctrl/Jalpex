/**
 * /api/news — Vercel serverless function
 *
 * Fetches the latest India trade / export-import related press releases from:
 *   1. PIB (Press Information Bureau) daily "All Releases" page (English)
 *   2. Ministry of Commerce press-releases page (commerce.gov.in)
 *
 * Returns merged JSON. Responses are cached on Vercel's CDN (see CACHE_SECONDS),
 * so government sites are only hit a few times per day — no cron job needed.
 *
 * Drop this file in the `api/` folder at the root of your Vercel project.
 * Your static site stays exactly as it is; this becomes available at /api/news.
 */

const CACHE_SECONDS = 10800; // 3 hours — CDN re-fetches at most this often
const MAX_ITEMS = 25;

const PIB_URLS = [
  "https://pib.gov.in/allRel.aspx?reg=3&lang=1",
  "https://www.pib.gov.in/allRel.aspx?reg=3&lang=1",
];
const COMMERCE_URLS = [
  "https://www.commerce.gov.in/press-releases/",
  "https://commerce.gov.in/press-releases/",
  "https://www.commerce.gov.in/press-releases",
];

// PIB groups releases under ministry headings. Keep items from these ministries…
const MINISTRY_PATTERNS = [
  /commerce\s*(&(amp;)?|and)\s*industry/i, // Ministry of Commerce & Industry (DGFT, Niryat)
  /ministry\s+of\s+finance/i,              // Ministry of Finance (CBIC, ICEGATE, customs)
];

// …and additionally keep any release (from any ministry) whose title matches:
const KEYWORD_PATTERN =
  /(export|import|foreign trade|trade polic|customs|tariff|dgft|icegate|cbic|niryat|\bfta\b|free trade|duty drawback|\bgst\b|e-?commerce export)/i;

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-IN,en;q=0.9,hi;q=0.8",
  "Upgrade-Insecure-Requests": "1",
};

/* ---------------------------- helpers ---------------------------- */

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

// try a list of URLs, return the first successful response body
async function fetchFirst(urls) {
  let lastErr;
  for (const url of urls) {
    try {
      return await fetchText(url);
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

/* ---------------------------- PIB ---------------------------- */

async function fetchPib() {
  const html = (await fetchFirst(PIB_URLS))
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  // Collect headings (used to know which ministry each release belongs to)
  const headings = [];
  const hRe = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = hRe.exec(html))) {
    const text = stripTags(m[2]);
    if (/(ministry|department|office|secretariat|commission|niti)/i.test(text)) {
      headings.push({ pos: m.index, text });
    }
  }

  // Collect press-release links.
  // NOTE: PIB uses several page names (PressReleasePage.aspx, and a misspelled
  // PressReleseDetail.aspx / PressReleseDetailm.aspx), so match on PRID= only.
  const items = [];
  const aRe = /<a[^>]+href=["']([^"']*PRID=\d+[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
  while ((m = aRe.exec(html))) {
    const title = stripTags(m[2]);
    if (!title || title.length < 15) continue;

    let url = decodeEntities(m[1]);
    if (url.startsWith("/")) url = "https://pib.gov.in" + url;
    if (!/^https?:/i.test(url)) url = "https://pib.gov.in/" + url.replace(/^\.?\//, "");

    // nearest heading above this link = its ministry
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
        ministry: ministry || null,
        title,
        url,
        prid,
        date: new Date().toISOString().slice(0, 10), // PIB page shows today's releases
      });
    }
  }
  return items;
}

/* ---------------------------- commerce.gov.in ---------------------------- */

function parseLooseDate(text) {
  // matches "15-September-2025", "24 July 2025", "15 Sep 2025", "15/09/2025"
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

async function fetchCommerce() {
  const html = (await fetchFirst(COMMERCE_URLS))
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const items = [];
  // Look at list rows / table rows / paragraphs that contain a link
  const rowRe = /<(li|tr|p|div)[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = rowRe.exec(html))) {
    const row = m[2];
    const a = row.match(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
    if (!a) continue;

    const title = stripTags(a[2]);
    if (!title || title.length < 20) continue;
    if (!/(press|release|trade|export|agreement|minister|commerce|\.pdf)/i.test(a[1] + " " + title))
      continue;

    let url = decodeEntities(a[1]);
    if (url.startsWith("/")) url = "https://www.commerce.gov.in" + url;
    if (!/^https?:/i.test(url)) continue;

    const date = parseLooseDate(stripTags(row));
    if (!items.some((it) => it.url === url)) {
      items.push({ source: "Ministry of Commerce", ministry: "Ministry of Commerce & Industry", title, url, date });
    }
  }

  // newest first when dates are known
  items.sort((x, y) => (y.date || "").localeCompare(x.date || ""));
  return items.slice(0, 10);
}

/* ---------------------------- handler ---------------------------- */

module.exports = async (req, res) => {
  // Debug mode: /api/news?debug=1 — shows what each source actually returned,
  // so parsing problems can be diagnosed without guessing. Safe to leave in.
  if (req.query && req.query.debug) {
    const report = {};
    for (const [name, urls] of [["pib", PIB_URLS], ["commerce", COMMERCE_URLS]]) {
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

  const [pib, commerce] = await Promise.allSettled([fetchPib(), fetchCommerce()]);

  const items = [];
  const errors = [];
  if (pib.status === "fulfilled") items.push(...pib.value);
  else errors.push("PIB: " + pib.reason.message);
  if (commerce.status === "fulfilled") items.push(...commerce.value);
  else errors.push("Commerce: " + commerce.reason.message);

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
