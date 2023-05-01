import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
// import reactDocgenTypescript from '@joshwooding/vite-plugin-react-docgen-typescript';

export default defineConfig({
  plugins: [
    react(),
    // reactDocgenTypescript(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      name: 'BancaDsUI',
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'umd'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
