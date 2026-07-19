import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        concept: resolve(import.meta.dirname, "concept/index.html"),
        experience: resolve(import.meta.dirname, "experience/index.html"),
        operations: resolve(import.meta.dirname, "operations/index.html"),
        approval: resolve(import.meta.dirname, "approval/index.html"),
      },
    },
  },
  server: {
    host: "127.0.0.1",
    port: 4173,
  },
  preview: {
    host: "127.0.0.1",
    port: 4174,
  },
});
