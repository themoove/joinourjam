# CITY JAM

The website for CITY JAM, at [joinourjam.com](https://joinourjam.com). The Vercel deployment is [https://cityjam.vercel.app](https://cityjam.vercel.app).

The MooVe owns the site. Pat Villaceran looks after it.

## Tech stack

Plain HTML, CSS, and JavaScript. Vercel serves the files in this repository directly. There is no framework, package manager, or build step.

The main site is a single file, `index.html`. The stylesheet, the router, and most images are inside that file. Fonts — Schibsted Grotesk, Hanken Grotesk, and Space Mono — load from Google Fonts.

On a normal web server the router uses real paths such as `/manifesto` and `/workbook`. Open the file directly from disk and the same pages use hash URLs, because a `file://` page cannot change its path.

The Creator Labs tour is a separate page at `rebels-and-legends/tour/`, with its own HTML and image files.

Forms currently go out through FormSubmit. How that works, and the optional Google Apps Script upgrade, is in [docs/operations.md](docs/operations.md).

## Folder structure

```
index.html                  The whole main site
404.html                    Copy of index.html, used by hosts that fall back on a 404
og.jpg                      Social sharing image. Stays a real file next to index.html
sitemap.xml                 Pages listed for search engines
robots.txt                  Crawler rules. Points at the sitemap
CNAME                       Custom domain: joinourjam.com
vercel.json                 Rewrites and response headers for the Vercel deploy
_redirects                  The same rewrites, in Netlify's format
.htaccess                   The same rewrites, for Apache
rebels-and-legends/tour/   Creator Labs tour landing page
  index.html
  hero.jpg
  cityjam-wordmark-white.png
  cityjam-wordmark-white-nav.png
docs/                       Operational notes. Start at docs/README.md
```

## Run it locally

Clone the repo and serve the folder. Nothing to install.

```bash
git clone https://github.com/themoove/joinourjam.git
cd joinourjam
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080). Links inside the site work on that server.

A refresh of a deep link such as `/manifesto` needs a server that sends unknown paths to `index.html`. That is what production does. From this folder, the Vercel CLI does the same thing locally:

```bash
npx vercel dev
```

Opening `index.html` straight from disk also works. The router then uses hash URLs such as `/#/manifesto`.

## Deploy

Vercel deploys this repository from `main`. A push to `main` is the production deploy. Vercel has no build command for this project. It publishes the files as they are.

`vercel.json` sends unknown paths to `index.html`, so a shared link such as `/manifesto` comes back as a normal page. `/rebels-and-legends/tour` is served from that folder's own `index.html`. `sitemap.xml`, `robots.txt`, `og.jpg`, and `favicon.ico` are left alone.

The Vercel URL is [https://cityjam.vercel.app](https://cityjam.vercel.app). The domain in the pages, the sitemap, and `CNAME` is [joinourjam.com](https://joinourjam.com).

## Branches and pull requests

`main` is the default branch, and it is the branch Vercel deploys.

Do the work on another branch and open a pull request into `main`. Branches from Cursor work in this repo are named `cursor/short-description-xxxx`. Branches from Vercel agent work are named `vercel-agent/short-description`. Pull request titles are a short sentence that says what changed.

Merging into `main` is what ships.

## More detail

Routing, the extra host files, keeping `404.html` identical to `index.html`, and form delivery are written up in [the docs index](docs/README.md).
