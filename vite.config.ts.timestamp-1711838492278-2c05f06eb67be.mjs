// vite.config.ts
import { defineConfig } from "file:///C:/Users/kouak/Desktop/Github%20projects/Critik-V-client/node_modules/.pnpm/vite@5.1.6_sass@1.72.0/node_modules/vite/dist/node/index.js";
import { ViteImageOptimizer } from "file:///C:/Users/kouak/Desktop/Github%20projects/Critik-V-client/node_modules/.pnpm/vite-plugin-image-optimizer@1.1.7_vite@5.1.6/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import react from "file:///C:/Users/kouak/Desktop/Github%20projects/Critik-V-client/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.1.6/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
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
      "@modals": "/src/modals"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxrb3Vha1xcXFxEZXNrdG9wXFxcXEdpdGh1YiBwcm9qZWN0c1xcXFxDcml0aWstVi1jbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGtvdWFrXFxcXERlc2t0b3BcXFxcR2l0aHViIHByb2plY3RzXFxcXENyaXRpay1WLWNsaWVudFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMva291YWsvRGVza3RvcC9HaXRodWIlMjBwcm9qZWN0cy9Dcml0aWstVi1jbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG4vLyBpbXBvcnQgbWlsbGlvbiBmcm9tIFwibWlsbGlvbi9jb21waWxlclwiO1xyXG5pbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tIFwidml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCksIFZpdGVJbWFnZU9wdGltaXplcih7fSldLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBjc3NNaW5pZnk6IFwibGlnaHRuaW5nY3NzXCIsXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBjb21wb25lbnRzXCI6IFwiL3NyYy9jb21wb25lbnRzXCIsXHJcbiAgICAgIFwiQGNvbnRleHRcIjogXCIvc3JjL2NvbnRleHRcIixcclxuICAgICAgXCJAcGFnZXNcIjogXCIvc3JjL3BhZ2VzXCIsXHJcbiAgICAgIFwiQHN0b3JlXCI6IFwiL3NyYy9zdG9yZVwiLFxyXG4gICAgICBcIkB1dGlsc1wiOiBcIi9zcmMvdXRpbHNcIixcclxuICAgICAgXCJAaG9va3NcIjogXCIvc3JjL2hvb2tzXCIsXHJcbiAgICAgIFwiQGFzc2V0c1wiOiBcIi9zcmMvYXNzZXRzXCIsXHJcbiAgICAgIFwiQHNhc3NcIjogXCIvc3JjL3Nhc3NcIixcclxuICAgICAgXCJAbGF5b3V0c1wiOiBcIi9zcmMvbGF5b3V0c1wiLFxyXG4gICAgICBcIkBtb2RhbHNcIjogXCIvc3JjL21vZGFsc1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVyxTQUFTLG9CQUFvQjtBQUUvWCxTQUFTLDBCQUEwQjtBQUNuQyxPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUN6QyxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLE1BQ1osVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osV0FBVztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
