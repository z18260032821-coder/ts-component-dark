import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      // Two entries: the full catalogue and the standalone dialog spec page.
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        dialog: fileURLToPath(new URL('./dialog.html', import.meta.url)),
      },
    },
  },
})
