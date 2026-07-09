import { defineConfig } from 'astro/config';

// This repo is a GitHub Pages "project site" (not the username.github.io
// root site), so it's served from a subfolder — `base` must match the
// repo name or all internal links/assets will 404.
export default defineConfig({
  site: 'https://denise-lin.github.io',
  base: '/defense-bom',
});
