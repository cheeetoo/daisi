// @ts-check
import { defineConfig } from 'astro/config';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: 'https://dartmouthaisafety.org',
  trailingSlash: 'ignore',
  // Old page URLs, in case any are floating around.
  redirects: {
    '/get-involved': '/#sign-up',
    '/mission': '/',
    '/resources': '/#reading',
    // Short link for QR codes. The target is `qrUrl` in src/data/site.ts.
    '/qr': site.qrUrl,
  },
});
