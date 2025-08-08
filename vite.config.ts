import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react(),tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Puppy PWA",
        short_name: "Puppies",
        icons: [
          {
            src: "/icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        theme_color: "#6a0dad",
      },
    }),
  ],
})
