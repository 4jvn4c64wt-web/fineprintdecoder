import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fineprintdecoder.com',
  output: 'static',
  integrations: [
    sitemap({
      // Don't include API endpoints in the sitemap
      filter: (page) => !page.includes('/search.json'),
    }),
  ],
});
