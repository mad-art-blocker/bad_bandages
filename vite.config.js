import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [],
  server: {
    port: 5173,
    strictPort: true,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "./src/routes/about/index.html"),
        grid: resolve(__dirname, "./src/routes/grid-page/index.html"),
      },
    },
  },
});
