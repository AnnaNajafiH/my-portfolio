import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Replace with your preferred directory name
  },
});


//you can either use the commented export default or the one i added after that (uncommented)