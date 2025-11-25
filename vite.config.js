import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'jackpro.zeabur.app',
      '.zeabur.app'
    ],
    host: '0.0.0.0',
    port: 8080
  }
});
