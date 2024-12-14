import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { isTest } from './tests/config';

export default defineConfig({
  site: 'https://davidbalivo.com',
  integrations: [tailwind(), mdx()],
  devToolbar: {
    enabled: !isTest,
  },
});
