import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api': 'http://localhost:3000', //whenever a request is made in which there is /api, the actual link will append to it, server will feel like url request origins from this same url
    },
  },
  plugins: [react()],
})

// This proxy makes sure and tells that the url request origin from the same url, so cors issue solved. wherever the vite application is, server will feel the request is coming from the same server. because the app.jsx is making request on the same url and server is also running on the same url 'http://localhost:3000'