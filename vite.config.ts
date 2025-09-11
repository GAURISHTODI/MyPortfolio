// vite.config.ts (Correct Version)

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // The server block must contain the proxy configuration
  server: {
    host: "::",
    port: 8080, // Your frontend port
    proxy: {
      // Any request starting with '/api' will be sent to your backend
      '/api': {
        target: 'http://localhost:3001', // Your backend server URL
        changeOrigin: true,
      },
    }
  },
  
  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});