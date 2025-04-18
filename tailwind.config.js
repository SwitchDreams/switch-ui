/** @type {import("tailwindcss").Config} **/
import generated from "@headlessui/tailwindcss";

import colors from "./src/constants/colors";
import switchUiPlugin from "./src/tailwind.plugin";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,stories.tsx}"],
  theme: {
    extend: {
      curvature: {
        md: 0,
        full: 0,
      },
      colors: {
        ...colors,
        btn: {
          primary: {
            bg: colors.primary["300"],
            hover: colors.primary["400"],
            active: colors.primary["500"],
            focus: colors.primary["300"],
            text: colors.gray.white,
          },
          outline: {
            bg: colors.gray.white,
            hover: colors.primary["25"],
            active: colors.primary["100"],
            focus: colors.gray.white,
            text: colors.primary["300"],
          },
          invisible: {
            bg: colors.gray.white,
            hover: colors.gray["50"],
            active: colors.gray["100"],
            focus: colors.gray["white"],
            text: colors.gray["800"],
          },
        },
        avatar: {
          primary: {
            bg: colors.primary["50"],
            text: colors.primary["400"],
          },
          gray: {
            bg: colors.gray["300"],
            text: colors.gray["600"],
          },
        },
        tab: {
          border: colors.gray["500"],
          text: colors.gray["500"],
          selectedBorder: colors.primary["300"],
          selectedText: colors.primary["300"],
        },
        badge: {
          primary: {
            bg: colors.primary["25"],
            text: colors.primary["700"],
            border: colors.primary["300"],
            bgOpacity: colors.primary["300"]
          },
          secondary: {
            bg: colors.secondary["25"],
            text: colors.secondary["700"],
            border: colors.secondary["300"],
            bgOpacity: colors.secondary["300"]
          },
          success: {
            bg: colors.success["100"],
            text: colors.success["900"],
            border: colors.success["300"],
            bgOpacity: colors.success["300"]
          },
          warning: {
            bg: colors.warning["100"],
            text: colors.warning["900"],
            border: colors.warning["300"],
            bgOpacity: colors.warning["300"]
          },
          danger: {
            bg: colors.error["100"],
            text: colors.error["900"],
            border: colors.error["300"],
            bgOpacity: colors.error["300"]
          }
        },
        slider: {
          bg: colors.primary["300"],
          accent: colors.primary["300"],
          hover: colors.primary["400"],
        },
        checkbox: {
          primary: {
            border: colors.primary["300"],
            checked: colors.primary["300"],
            hover: colors.primary["300"],
          },
        },
        input: {
          caret: colors.primary["100"],
          focus: colors.primary["100"],
        },
      },
    },
    fontFamily: {
      default: ["Poppins", "sans-serif"],
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
  plugins: [switchUiPlugin, generated({ prefix: "ui" })],
};
