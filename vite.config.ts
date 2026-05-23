import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so built asset URLs resolve correctly when the site is
  // served from a GitHub Pages project subpath (e.g. https://user.github.io/eeema-gine/).
  base: './',
  server: {
    host: true,
    port: 5173
  },
  build: {
    target: 'esnext'
  }
});
