import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'jjjjjbig.zeabur.app',
      '.zeabur.app'
    ]
  },
  preview: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'jjjjjbig.zeabur.app',
      '.zeabur.app'
    ],
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 4321
  }
});
