import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://main.dpwqb9kzfy4tu.amplifyapp.com/senai/",
})
