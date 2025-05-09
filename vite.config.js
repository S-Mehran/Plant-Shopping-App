import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/S-Mehran/Plant-Shopping-App",
  plugins: [react()],
})
