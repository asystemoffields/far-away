import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    outDir: 'dist-widget',
    target: 'es2022',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/widget.ts'),
      name: 'DAMITViewer',
      fileName: (format) => `damit-viewer.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: [],
    },
  },
});
