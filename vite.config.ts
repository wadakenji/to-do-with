import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const pwaIconsPath = process.env.PWA_ICONS_PATH;

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
        theme_color: '#f0f2f5',
        icons: [
          {
            src: `${pwaIconsPath}/192.png`,
            size: '192x192',
            type: 'image/png',
          },
          {
            src: `${pwaIconsPath}/512.png`,
            size: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
