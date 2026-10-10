import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const LASTMOD = '2026-10-10';

/** @type {Record<string, { changefreq: string, priority: number }>} */
const ROUTES = {
  'https://joinourjam.com/': { changefreq: 'weekly', priority: 1 },
  'https://joinourjam.com/magazine': { changefreq: 'daily', priority: 0.9 },
  'https://joinourjam.com/desks': { changefreq: 'weekly', priority: 0.8 },
  'https://joinourjam.com/playlists': { changefreq: 'weekly', priority: 0.8 },
  'https://joinourjam.com/labs': { changefreq: 'monthly', priority: 0.8 },
  'https://joinourjam.com/ambassadors': { changefreq: 'monthly', priority: 0.6 },
  'https://joinourjam.com/manifesto': { changefreq: 'monthly', priority: 0.9 },
  'https://joinourjam.com/app': { changefreq: 'monthly', priority: 0.7 },
  'https://joinourjam.com/print': { changefreq: 'monthly', priority: 0.7 },
  'https://joinourjam.com/business': { changefreq: 'monthly', priority: 0.5 },
  'https://joinourjam.com/industry': { changefreq: 'weekly', priority: 0.6 },
  'https://joinourjam.com/sync': { changefreq: 'monthly', priority: 0.6 },
  'https://joinourjam.com/studios': { changefreq: 'monthly', priority: 0.6 },
  'https://joinourjam.com/partners': { changefreq: 'monthly', priority: 0.6 },
  'https://joinourjam.com/bookers': { changefreq: 'monthly', priority: 0.6 },
  'https://joinourjam.com/workbook': { changefreq: 'monthly', priority: 0.9 },
  'https://joinourjam.com/hired': { changefreq: 'monthly', priority: 0.5 },
  'https://joinourjam.com/careers': { changefreq: 'monthly', priority: 0.5 },
  'https://joinourjam.com/circle': { changefreq: 'monthly', priority: 0.5 },
  'https://joinourjam.com/founders': { changefreq: 'monthly', priority: 0.6 },
  'https://joinourjam.com/learn': { changefreq: 'monthly', priority: 0.8 },
  'https://joinourjam.com/maestros': { changefreq: 'monthly', priority: 0.8 },
  'https://joinourjam.com/cities': { changefreq: 'monthly', priority: 0.5 },
  'https://joinourjam.com/pricing': { changefreq: 'monthly', priority: 0.7 },
  'https://joinourjam.com/terms': { changefreq: 'monthly', priority: 0.2 },
  'https://joinourjam.com/privacy': { changefreq: 'monthly', priority: 0.2 },
  'https://joinourjam.com/teach': { changefreq: 'monthly', priority: 0.8 },
};

export default defineConfig({
  site: 'https://joinourjam.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  redirects: {
    '/nobodys-looking': '/workbook',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/intake'),
      serialize(item) {
        const meta = ROUTES[item.url.replace(/\/$/, '')] || ROUTES[item.url];
        if (meta) {
          item.changefreq = meta.changefreq;
          item.priority = meta.priority;
        }
        item.lastmod = LASTMOD;
        return item;
      },
    }),
  ],
});
