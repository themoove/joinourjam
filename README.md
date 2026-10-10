# CITY JAM — joinourjam.com

Static site. Astro builds one HTML file per route, which is what Vercel serves. There is no client-side router.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` writes `dist/`. `npm run check` builds, then checks that every route rendered and that the calls to action point where they should.

## Intake

Every Perspective URL lives in `src/lib/funnels.ts`. Replace each `PASTE_PERSPECTIVE_URL_…` value with the published https link. Until you do, the button opens a holding page that stores nothing and sends nothing.

The magazine’s reading and the £18 subscribe button go to `https://dispatch.joinourjam.com` with UTM tags. That host is not a Perspective funnel.

## Host files left in place

`CNAME`, `_redirects` and `.htaccess` are still in the repo. Which account hosts the domain is unanswered, so they were not deleted. The old “send every path to index.html” rules were removed, because they would hide the real pages.

Do not deploy from a pull request. Hosting and DNS stay as they are.
