/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "node_modules/flowbite-react/lib/esm/**/*.js"
];
export const theme = {
  container: {
    center: true,
  },
  extend: {},
};
export const plugins = [require("flowbite/plugin")];
