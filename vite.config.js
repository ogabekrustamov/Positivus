import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'], // add custom font here
      },
    },
  },
  plugins: [react(), tailwindcss(),],
})


