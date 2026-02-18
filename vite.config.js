// // vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       registerType: 'autoUpdate',
//       includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', 'A'], // Ensure these files exist in your /public folder
//       manifest: {
//         name: 'Anamika AI',
//         short_name: 'Anamika',
//         description: 'Your Personal AI Assistant',
//         theme_color: '#ffffff',
//         // 1. IMPORTANT: This background color determines the native splash screen color
//         background_color: '#ffffff',
//         display: 'standalone',
//         // 2. IMPORTANT: These are the static icons Android uses for the home screen AND the splash screen
//         icons: [
//           {
//             src: '/A', // Make sure these files exist in your /public folder!
//             sizes: '192x192',
//             type: 'image/png'
//           },
//           {
//             src: '/A',
//             sizes: '512x512',
//             type: 'image/png'
//           },
//           // For better Android 12+ support, add a maskable icon
//           {
//             src: '/A', // You can usually reuse the 512 one
//             sizes: '512x512',
//             type: 'image/png',
//             purpose: 'any maskable'
//           }
//         ]
//       }
//     })
//   ],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // 1. UPDATED: Only include the assets you actually generated in Step 1
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', 'android-chrome-192x192.png', 'android-chrome-512x512.png', 'apple-touch-icon.png', 'favicon-16x16.png', 'favicon-32x32.png'], // Ensure these files exist in your /public folder
      manifest: {
        name: 'Anamika AI',
        short_name: 'Anamika',
        description: 'Your Personal AI Assistant',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',

        // 2. UPDATED: Pointing to the REAL, correctly sized files with extensions
        icons: [
          {
            src: '/android-chrome-192x192.png', // The correct 192 file
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png', // The correct 512 file
            sizes: '512x512',
            type: 'image/png'
          },
          // Purpose: 'maskable' is important for modern Android adaptive icons
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
})