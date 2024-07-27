import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/GBC/',
  plugins: [vue()],
  publicPath: process.env.NODE_ENV === "production" ? "/GBC/" : "/",
})
