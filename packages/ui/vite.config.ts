/// <reference types="histoire" />

import { HstVue } from "@histoire/plugin-vue";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  histoire: {
    // your Histoire configuration
    plugins: [HstVue()],
    setupFile: "/histoire-setup.ts",
  },
});
