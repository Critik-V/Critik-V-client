import { defineConfig } from "vite";
import million from "million/compiler";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [million.vite({ auto: true }), react(), ViteImageOptimizer({})],
  build: {
    cssMinify: "lightningcss",
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@store": "/src/store",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@assets": "/src/assets",
      "@sass": "/src/sass",
      "@layouts": "/src/layouts",
    }
  }
});
