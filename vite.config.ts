import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src/"),
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      container: `${path.resolve(__dirname, "./src/container/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      routes: `${path.resolve(__dirname, "./src/routes/")}`,
      store: `${path.resolve(__dirname, "./src/store/")}`,
      theme: `${path.resolve(__dirname, "./src/theme/")}`,
    },
  },
});
