import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/.netlify/functions/products": {
        target: "https://burger-serverless-functions.netlify.app",
        changeOrigin: true,
        secure: false,
        ws: true,
        followRedirects: true,
      },
    },
  },
});
