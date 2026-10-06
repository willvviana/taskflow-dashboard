import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Tailwind v4 is a Vite plugin. No tailwind.config.js needed.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});