import type { Preview } from "@storybook/react";
import "../src/index.css";
import "../src/fonts.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
