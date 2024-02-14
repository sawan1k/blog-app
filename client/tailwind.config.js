import flowbitePlugin from "flowbite/plugin";
import tailwindForms from "@tailwindcss/forms";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin, tailwindForms, tailwindScrollbar],
};
