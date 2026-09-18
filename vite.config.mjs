import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  publicDir: false,
  build: {
    lib: {
      entry: "src/MaterialsCloudHeader/index.jsx",
      name: "McReactHeader",
      fileName: (format) => (format === "es" ? "index.mjs" : "index.cjs"),
      formats: ["es", "cjs"],
    },
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
