import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      commonjsOptions: { transformMixedEsModules: true }
    },
    plugins: [react()],
    define: {
        'process.env': process.env
      }
  };
});

