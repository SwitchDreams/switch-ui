<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
=======
/** @type {import("tailwindcss").Config} **/
import generated from "@headlessui/tailwindcss";

>>>>>>> df4e4eca1ac854f218cee64ca3ab7481975b4be8
import colors from "./src/constants/colors";

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
  plugins: [generated({ prefix: "ui" })],
};
