import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  ssr: false,
  start: {
    server: {
      preset: "vercel",
    },
  },
});
