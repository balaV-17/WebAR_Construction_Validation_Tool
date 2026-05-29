import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  return {
    plugins: [react(), tailwindcss()],
    base: command === 'serve' ? '/' : '/WebAR_Construction_Validation_Tool/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      allowedHosts: [
      'figurine-quartet-pope.ngrok-free.dev',
        '.ngrok-free.dev', // Allows all ngrok free domains
        'localhost',
        '127.0.0.1',
    ],

      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      host: '0.0.0.0',
      port: 5173,
    },
  };
});