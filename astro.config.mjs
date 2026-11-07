import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.chiu.lol',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
});
