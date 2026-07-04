import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages serves at https://<org>.github.io/elmac-website/ until a
// custom domain is attached; base "./" keeps asset URLs relative so both work.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
