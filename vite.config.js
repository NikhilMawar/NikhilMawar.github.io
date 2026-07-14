import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function githubPagesSpaFallback() {
  return {
    name: "github-pages-spa-fallback",

    closeBundle() {
      const distFolder = resolve(process.cwd(), "dist");
      const indexFile = resolve(distFolder, "index.html");
      const fallbackFile = resolve(distFolder, "404.html");

      if (existsSync(indexFile)) {
        copyFileSync(indexFile, fallbackFile);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    githubPagesSpaFallback(),
  ],

  base: "/",

  server: {
    host: "0.0.0.0",

    watch: {
      usePolling: true,
      interval: 100,
    },

    hmr: {
      overlay: true,
    },
  },
});