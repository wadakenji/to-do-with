import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ jsxImportSource: '@emotion/react' }),
    VitePWA({
      manifest: {
        name: 'いつかやりたい',
        short_name: 'いつかやりたい',
        display: 'standalone',
        background_color: '#f0f2f5',
        icons: [
          {
            src: 'https://www.shutterstock.com/shutterstock/photos/1798019332/display_1500/stock-vector-free-sample-outline-glyph-icon-1798019332.jpg',
            size: '192x192',
          },
          {
            src: 'https://www.shutterstock.com/shutterstock/photos/1798019332/display_1500/stock-vector-free-sample-outline-glyph-icon-1798019332.jpg',
            size: '512x512',
          },
        ],
      },
    }),
  ],
});
