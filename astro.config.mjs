import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://micmer-git.github.io',
  base: '/recastello',
  integrations: [tailwind()],
  build: {
    assets: '_assets',
  },
});
