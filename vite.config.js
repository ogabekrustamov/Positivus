// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
//
// // https://vite.dev/config/
// export default defineConfig({
//   theme: {
//     extend: {
//       fontFamily: {
//         space: ['Space Grotesk', 'sans-serif'], // add custom font here
//       },
//     },
//   },
//   plugins: [react(), tailwindcss(),],
// })
//
//
//

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true, // 👈 bu yerga yoziladi
  },
  css: {
    preprocessorOptions: {
      // agar kerak bo‘lsa SCSS yoki boshqa sozlamalar
    },
  },
})
