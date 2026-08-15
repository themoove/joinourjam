# CITY JAM — joinourjam.com

The site is a single-file client application in `index.html`. Every crawlable sitemap route also has a committed, server-delivered `/<route>/index.html` document. These route documents provide distinct titles, descriptions, canonicals, Open Graph metadata, JSON-LD, and readable HTML to crawlers that do not execute JavaScript; browsers then load the interactive application from `/index.html`.

## Updating route metadata

1. Update the route map in `generate-seo-routes.mjs`.
2. Run `node generate-seo-routes.mjs`.
3. Commit both the generator and generated `*/index.html` route documents.

## Deploy checklist

Keep `index.html`, `og.jpg`, `sitemap.xml`, `robots.txt`, `vercel.json`, and generated route documents at the repository root. The sitemap is the source of truth for indexed URLs.
