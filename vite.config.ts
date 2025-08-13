import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'prompt',
      devOptions: {
        enabled: false
      },
      manifest: {
        name: 'Midwest Frenchies',
        short_name: 'Puppies',
        icons: [
          {
            src: '/icons/pwa-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: '/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        theme_color: '#6a0dad',
        background_color: '#ffffff',
        display: 'standalone',
        "start_url": "/midwest-frenchies/",
        "scope": "/midwest-frenchies/",
        description: 'Adorable French Bulldog puppies for sale from Midwest Frenchies'
      },
      workbox: {
        clientsClaim: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/jerry-vrabel-development.github.io\/midwest-frenchies\/.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'puppies-page-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
              }
            }
          },
          {
            urlPattern: /^https:\/\/jerry-vrabel-development.github.io\/midwest-frenchies\/api/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'api-cache'
            }
          }
        ]
      }
    })
  ],
  base: '/midwest-frenchies/'
});
