# Operations

Practical notes for the CITY JAM site. These were the root README before the docs cleanup. The current deploy path is Vercel from `main`, described in the [root README](../README.md). The host files for other servers are still in the repo, and the notes below still apply to them.

## Files the site needs at the repo root

- `index.html` — the whole main site
- `404.html` — a byte-for-byte copy of `index.html`
- `og.jpg` — the social card image
- `sitemap.xml`
- `robots.txt`
- `CNAME` — contains `joinourjam.com`

`og.jpg` has to sit next to `index.html` as a real file. Social crawlers reject an image that is inlined in the page, so a missing or inlined card renders blank. The page points crawlers at `https://joinourjam.com/og.jpg`.

## Routing

Over `http` and `https`, the site uses real paths: `/magazine`, `/manifesto`, `/workbook`, and the rest of the list below. A server has to answer those paths with `index.html`. The page then reads `location.pathname` and draws the right view. Each view sets its own title, description, canonical URL, and social tags in the browser.

Open the file from disk (`file://`) and path changes are unavailable, so the same router falls back to hash URLs such as `/#/manifesto`. Crawlers never see that version. A fragment is not sent to the server, and a hash-only site would make every page one URL. Keep the live site on real paths.

The path-to-view alias table in the page (`PATHS` / `RPATHS`) is empty, so a path and its view key are the same word. `/workbook` is the book page. An earlier note used `/nobodys-looking` as an example of an alias. That alias is not in the page.

### Pages

These paths are the views inside `index.html`, and they are the URLs in `sitemap.xml` (plus the home page):

`/ambassadors` `/app` `/bookers` `/business` `/careers` `/circle` `/cities` `/desks` `/founders` `/hired` `/labs` `/learn` `/magazine` `/manifesto` `/partners` `/playlists` `/pricing` `/print` `/privacy` `/studios` `/sync` `/teach` `/terms` `/workbook`

`/rebels-and-legends/tour` is a separate HTML file, outside the list above. Its images live beside it.

## Hosts

Vercel is the deploy that ships. `main` deploys to [https://cityjam.vercel.app](https://cityjam.vercel.app), and [joinourjam.com](https://joinourjam.com) is the public domain on that host. `vercel.json` rewrites unknown paths to `index.html` and sends `/rebels-and-legends/tour` to the tour page. Those responses are normal pages (HTTP 200), which is what lets the sitemap and the per-page titles count.

Three other host configs are still in the repo:

- **Netlify.** `_redirects` does the same rewrites, with status 200, so the path the visitor asked for survives. A redirect to `/` would throw away the route. Cloudflare Pages can use the same kind of rewrite. This repo has no Cloudflare config file of its own.
- **Apache.** `.htaccess` serves a real file when one exists and sends every other path to `index.html`.
- **GitHub Pages.** `CNAME` is the custom domain, and `404.html` is what makes a deep link open for a person. GitHub still answers that request with a **404 status**. A person sees the site. A search engine treats the deep page as missing. Fine as a preview. The launch host is Vercel, where the same URL returns 200.

On Netlify and Vercel, the tour rules are listed before the catch-all so `/rebels-and-legends/tour` stays on its own file. Apache reaches the same place by serving a real file or directory when one exists.

## Keep `404.html` in step

`404.html` is an exact copy of `index.html`. After any edit to the main page, copy it again so the two files do not drift:

```bash
cp index.html 404.html
```

## Forms

Delivery is wired in the page.

FormSubmit is the destination today. The first live submission emails `hi.impat@joinourjam.com` a one-time activation link. After that activation, submissions arrive as a table. Copies also go to `hellorebel@joinourjam.com` and `mackenzie@joinourjam.com`.

A Google Apps Script URL can take over. The page reads it from `CJMAIL.gas`. That value is empty in the file that is checked in, so FormSubmit is the only destination. Pasting a deployed `/exec` URL into `CJMAIL.gas` sends forms to the spreadsheet first, and FormSubmit becomes the fallback when the script call fails. The script the page refers to is `cityjam_forms_backend.gs`. That file is not in this repository.

The request to Apps Script is sent as `text/plain` so the browser does not send a CORS preflight. The script is expected to parse the JSON body itself. The page treats a FormSubmit body of `"success": "false"` as a failure even when the HTTP status is 200, and it tells the person to email `hi.impat@joinourjam.com` if nothing went out.

The magazine subscribe form is the exception. It is left off this delivery path on purpose. Its submit handler shows a confirmation on the page and does not post anywhere yet. The comment in the page marks that post as still to do.
