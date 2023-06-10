import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/products": {
        target: "https://burger-serverless-functions.netlify.app/.netlify/functions/",
        changeOrigin: true,
        secure: true,
        followRedirects: true,
      },
    },
  },
});
