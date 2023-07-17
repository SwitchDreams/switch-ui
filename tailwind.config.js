/** @type {import('tailwindcss').Config} */
import theme from './src/constants/theme';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: theme
    },
  },
  plugins: [],
}
