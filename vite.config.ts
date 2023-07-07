import { fileURLToPath, URL } from 'node:url'
import ServerRef from 'vite-plugin-vue-server-ref'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ServerRef({
      debug: true,
      state: {
        foo: 'bar',
        nav: {
          cursor: {
            x: 0,
            y: 0
          }
        }
      }
    })
  ]
})
