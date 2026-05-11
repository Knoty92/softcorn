import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  start: {
    server: {
      preset: "vercel",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
