import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// Two bundles: ES (for build tools) and UMD (for <script>-tag embeds).
// Both inline Three.js and uPlot so a single file is sufficient; a future
// config split could externalise the deps for the ES output, but isn't
// worth the build-config complexity today.
// Sourcemaps are emitted only when SOURCEMAPS=1 is set — shipping 2.3 MB
// of sourcemaps to production by default leaks source.
export default defineConfig({
  build: {
    outDir: 'dist-widget',
    target: 'es2022',
    sourcemap: process.env.SOURCEMAPS === '1',
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/widget.ts'),
      name: 'DAMITViewer',
      fileName: (format) => `damit-viewer.${format}.js`,
      formats: ['es', 'umd'],
    },
  },
});
