import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), ViteImageOptimizer({})],
  build: {
    cssMinify: "lightningcss"
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@context": "/src/context",
      "@pages": "/src/pages",
      "@store": "/src/store",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@assets": "/src/assets",
      "@sass": "/src/sass",
      "@layouts": "/src/layouts",
      "@modals": "/src/modals",
      "@types": "/src/types",
      "@api": "/src/api"
    }
  }
});
