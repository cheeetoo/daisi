// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dartmouthaisafety.org',
  trailingSlash: 'ignore',
  // Old page URLs, in case any are floating around.
  redirects: {
    '/get-involved': '/#sign-up',
    '/mission': '/',
    '/resources': '/#reading',
  },
});
