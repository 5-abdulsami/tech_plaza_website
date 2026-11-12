// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * On Windows, Vite silently drops component CSS and scripts when the drive
 * letter is lowercase (common in VS Code terminals). Normalise it.
 */
const upperDrive = (/** @type {string} */ p) =>
  process.platform === 'win32' ? p.replace(/^[a-z]:/, (d) => d.toUpperCase()) : p;

const root = upperDrive(fileURLToPath(new URL('.', import.meta.url)));
process.chdir(upperDrive(process.cwd()));

export default defineConfig({
  root,
  site: 'https://techplaza.app',
  trailingSlash: 'never',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
