import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Set to "/<repo-name>/" so assets resolve correctly on GitHub Pages.
  // For local dev (npm run dev) this is ignored — Vite serves from root.
  base: "/taskflow-dashboard/",
  plugins: [react(), tailwindcss()],
});