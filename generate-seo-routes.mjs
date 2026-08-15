import { mkdir, writeFile } from 'node:fs/promises';

const routes = {
  ambassadors: ['Music Ambassadors — CITY JAM', 'A music-ambassador programme that helps independent artists stay focused on making music.'],
  app: ['The App — CITY JAM', 'CITY JAM is building a place for independent music where people listen before they judge.'],
  bookers: ['Bookers — CITY JAM', 'Book music for the sound, not the follower count.'],
  business: ['For business — CITY JAM', 'Independent music discovery for businesses that want to listen beyond popularity signals.'],
  careers: ['Careers — CITY JAM', 'Work with CITY JAM to make music making fun again.'],
  circle: ['Join the waitlist — CITY JAM', 'Join CITY JAM before the identity-blind independent-music platform opens.'],
  cities: ['Cities — CITY JAM', 'CITY JAM connects independent music scenes through a common standard: listen first.'],
  desks: ['The Desks — CITY JAM', 'CITY JAM editorial desks: music reporting, craft, scene reports, and long reads.'],
  founders: ['Founders — CITY JAM', 'Founding membership for people building a better future for independent music.'],
  hired: ['Marketplace — CITY JAM', 'Get booked for the sound, not the follower count.'],
  labs: ['Creator Labs — CITY JAM', 'Creator Labs helps independent artists build from their sound outward.'],
  learn: ['Learn — CITY JAM', 'Start with the work everyone skips: sound, taste, and an independent music practice.'],
  magazine: ['The Magazine — CITY JAM', 'Long reads about how records get made. No scores, no press releases.'],
  manifesto: ['Manifesto — CITY JAM', 'The only thing that should decide whether music is good is the music.'],
  partners: ['Brand Partners — CITY JAM', 'Build something in a scene. Do not rent an audience.'],
  playlists: ['Playlists — CITY JAM', 'Independent-music playlists chosen by ear: no payola and no filler.'],
  pricing: ['Pricing — CITY JAM', 'CITY JAM pricing, plainly.'],
  print: ['The Magazine in print — CITY JAM', 'CITY JAM Issue 001: music as culture, not a content category.'],
  privacy: ['Privacy — CITY JAM', 'CITY JAM privacy policy.'],
  studios: ['Certified Studios — CITY JAM', 'CITY JAM certified studios: rooms that make records.'],
  sync: ['Sync Studios — CITY JAM', 'Screened, cleared, independent music for sync.'],
  teach: ['Become a maestro — CITY JAM', 'Teach the next virtuosos of the world.'],
  terms: ['Terms — CITY JAM', 'CITY JAM terms in plain English.'],
  workbook: ['Nobody’s Looking — a method for independent artists | CITY JAM', 'Read Part Zero free: a 27-chapter method for independent artists, starting with the sound.'],
};

const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
for (const [slug, [title, description]] of Object.entries(routes)) {
  const url = `https://joinourjam.com/${slug}`;
  const page = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)}</title>
<meta name="description" content="${escape(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website"><meta property="og:site_name" content="CITY JAM">
<meta property="og:url" content="${url}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:image" content="https://joinourjam.com/og.jpg">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(title)}"><meta name="twitter:description" content="${escape(description)}"><meta name="twitter:image" content="https://joinourjam.com/og.jpg">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":${JSON.stringify(title)},"description":${JSON.stringify(description)},"url":"${url}","isPartOf":{"@type":"WebSite","name":"CITY JAM","url":"https://joinourjam.com/"}}</script>
<script>fetch('/index.html',{credentials:'same-origin'}).then(r=>{if(!r.ok)throw new Error('Unable to load CITY JAM');return r.text()}).then(html=>{document.open();document.write(html);document.close()}).catch(()=>{})</script>
</head><body><main><h1>${escape(title)}</h1><p>${escape(description)}</p><p><a href="/">CITY JAM — independent music, judged on sound alone.</a></p></main></body></html>`;
  await mkdir(slug, { recursive: true });
  await writeFile(`${slug}/index.html`, page);
}
