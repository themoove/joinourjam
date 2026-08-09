# CITY JAM — joinourjam.com

Single-file site. No build step. `index.html` is the entire application.

## Deploy checklist
1. Put these at the repo root: `index.html` · `404.html` · `og.jpg` · `sitemap.xml` · `robots.txt` · `CNAME`
2. `og.jpg` must sit next to index.html — social crawlers reject inline images.
3. Point the domain: GitHub Pages → Settings → Pages → custom domain (CNAME file is already here).

## Routing — read this before choosing a host
The site uses real crawlable URLs (`/manifesto`, `/nobodys-looking`…) when served
over http, and falls back to hash routing when opened as a file.

- **GitHub Pages**: `404.html` (an exact copy of index.html) makes deep links *work*
  for humans — but GitHub serves them with a **404 status**, so search engines will
  not index the deep pages. Fine for a preview; wrong for launch.
- **Netlify / Vercel / Cloudflare Pages** (recommended for launch): use the included
  `_redirects` / `vercel.json` — deep links return **200** and the SEO work
  (unique titles, canonicals, sitemap) actually counts.

## After every copy change
Re-copy `index.html` over `404.html` so the two never drift:
`cp index.html 404.html`

## Forms
Delivery is wired (FormSubmit now, Apps Script when `CJMAIL.gas` is set — see
`cityjam_forms_backend.gs`). First live submission triggers a one-time activation
email to hi.impat@joinourjam.com.
