import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `vite` (dev/preview) serves the demo app from index.html.
// `vite build` builds the publishable library from
// src/MaterialsCloudHeader into dist/.
export default defineConfig({
  plugins: [react()],
  // Don't copy public/ into dist: `vite build` produces the npm library,
  // and demo-only assets (favicons, manifest) don't belong in the package.
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
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
