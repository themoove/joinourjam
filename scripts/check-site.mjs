import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const routes = [
  'index.html', 'magazine.html', 'desks.html', 'playlists.html', 'labs.html',
  'ambassadors.html', 'manifesto.html', 'app.html', 'print.html', 'business.html',
  'industry.html', 'sync.html', 'studios.html', 'partners.html', 'bookers.html',
  'workbook.html', 'hired.html', 'careers.html', 'circle.html', 'founders.html',
  'learn.html', 'maestros.html', 'cities.html', 'pricing.html', 'terms.html',
  'privacy.html', 'teach.html', '404.html',
];

const banned = [
  'formsubmit',
  'hi.impat@',
  'hellorebel@',
  'mackenzie@',
  'cityjam-2026',
  'aiff.ai',
  'Payments are handled by Stripe',
  'CITY JAM Masters',
  'Watch a class first',
  'swipe the crate',
  'SWIPE THE CRATE',
  'the 65%',
  '£149',
  'data-nav',
  '#/circle',
];

function read(name) {
  return readFileSync(join(dist, name), 'utf8');
}

const errors = [];
const pages = {};
for (const name of routes) {
  try {
    pages[name] = read(name);
  } catch {
    errors.push(`missing ${name}`);
  }
}

const intakeDir = join(dist, 'intake');
let intakeCount = 0;
try {
  intakeCount = readdirSync(intakeDir).filter((f) => f.endsWith('.html')).length;
} catch {
  errors.push('missing dist/intake');
}
if (intakeCount < 16) errors.push(`expected at least 16 intake pages, found ${intakeCount}`);

pages['sitemap.xml'] = read('sitemap.xml');
const all = Object.values(pages).join('\n');
for (const needle of banned) {
  if (all.toLowerCase().includes(needle.toLowerCase())) errors.push(`banned copy still present: ${needle}`);
}

function has(file, needle, label) {
  if (!pages[file] || !pages[file].includes(needle)) errors.push(`${file} missing ${label}: ${needle}`);
}

has('desks.html', 'href="/magazine#submit"', 'play us something');
has('playlists.html', 'href="/magazine#submit"', 'play us something');
has('print.html', 'href="/magazine#submit"', 'submit for issue 001');
has('business.html', 'href="#ways"', 'five ways in');
has('business.html', 'href="/industry"', 'industry card');
has('industry.html', 'Talk to Pat', 'talk to pat');
has('industry.html', 'industrydotaiff.substack.com', 'substack');
has('maestros.html', '/intake/maestroWaitlist', 'maestro funnel');
has('magazine.html', '/intake/magFreeMember', 'free member');
has('magazine.html', '/intake/musicSubmission', 'submission');
has('pricing.html', 'dispatch.joinourjam.com', 'subscribe external');
has('app.html', 'dispatch.joinourjam.com', 'subscribe external');
has('circle.html', '/intake/circleWaitlist', 'circle funnel');
has('labs.html', '/intake/creatorLabs', 'labs funnel');
has('404.html', 'noindex', '404 noindex');
has('terms.html', 'mailto:hello@joinourjam.com', 'hello link');
has('privacy.html', 'https://ico.org.uk', 'ico link');
has('desks.html', 'The rule under all ten', 'ten desks');
has('careers.html', 'Become a Music Ambassador', 'ambassador line');
has('sitemap.xml', 'https://joinourjam.com/maestros', 'sitemap maestros');
has('sitemap.xml', 'https://joinourjam.com/industry', 'sitemap industry');
has('sitemap.xml', '<lastmod>', 'sitemap lastmod');

if (pages['pricing.html']?.includes('href="#/circle"') || pages['app.html']?.includes('href="#/circle"')) {
  errors.push('dead #/circle tier link');
}
if (pages['sitemap.xml']?.includes('/intake/')) errors.push('intake leaked into sitemap');

const nobodys = join(dist, 'nobodys-looking.html');
try {
  const html = readFileSync(nobodys, 'utf8');
  if (!html.includes('/workbook')) errors.push('nobodys-looking does not point at /workbook');
} catch {
  errors.push('missing nobodys-looking redirect');
}

for (const [name, html] of Object.entries(pages)) {
  if (!name.endsWith('.html')) continue;
  if (html.includes('<title></title>') || !html.includes('<h1')) errors.push(`${name} has no h1 or title`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`ok ${routes.length} routes, ${intakeCount} intake pages, sitemap present`);
