/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("@acme/tailwind-config")],
  content: [
    "../../packages/ui/components/**/*.{js,ts,jsx,vue}",
    "./src/pages/**/*.{js,ts,jsx,vue}",
    "./src/components/**/*.{js,ts,jsx,vue}",
    "./src/App.vue",
  ],
};
