import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createProxyMiddleware } from "http-proxy-middleware";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Notes-App/",
  server: {
    middleware: [
      createProxyMiddleware("/api", {
        target: "https://api.npoint.io/330476ee1cf37edbfd70",
        changeOrigin: true,
      }),
    ],
  },
});
