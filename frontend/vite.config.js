import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "./", //métele el nommbre del repo( base: "/nombre-repo/",)
  plugins: [react()],
  server: {
    open: "/",
    watch: {
      usePolling: true
    }
  }
});

