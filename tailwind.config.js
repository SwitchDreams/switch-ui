/** @type {import("tailwindcss").Config} **/
import generated from "@headlessui/tailwindcss";
import colors from "./src/constants/colors";
import RoundsPlugin from "./tailwind.rounded";

const plugin = require('tailwindcss/plugin')

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "7xl": "72px",
      "6xl": "60px",
      "5xl": "48px",
      "4.5xl": "40px",
      "4xl": "36px",
      "3xl": "30px",
      "2xl": "24px",
      xl: "20px",
      lg: "18px",
      md: "16px",
      sm: "14px",
      xs: "12px",
    },
  },
  plugins: [
    generated({ prefix: "ui" }),
    plugin(RoundsPlugin),
  ],
};
