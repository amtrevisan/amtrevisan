import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // You need to import 'path' for this to work

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This maps the alias '@/' to the absolute path of the 'src' directory.
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
