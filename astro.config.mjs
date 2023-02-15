// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Enable the Vue renderer to support Vue components.
  // renderers: ['@astrojs/renderer-vue'],
  site: 'https://cognition-theme.netlify.app/',
  integrations: [mdx()]
});