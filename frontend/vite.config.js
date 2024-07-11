import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    proxy:{
      "/api":{
<<<<<<< HEAD
        target:"https://twitter-backend-y8sx.onrender.com",
=======
      //target:"https://twitter-backend-y8sx.onrender.com",
      target:"http://localhost:5000",
>>>>>>> 351ac885cd8328c2aa74c50ec9b0dd62492dc179
        changeOrigin:true,
      }
    }
  }
})

