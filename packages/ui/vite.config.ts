import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import reactDocgenTypescript from '@joshwooding/vite-plugin-react-docgen-typescript';

console.log(reactDocgenTypescript);
// /** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react(),
    reactDocgenTypescript(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      name: 'Banca-Design-System-React-Components',
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@stitches/react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@stitches/react': 'stitches',
        },
      },
    },
  },
});
