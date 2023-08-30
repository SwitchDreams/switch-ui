import type { Preview } from "@storybook/react";
import "../src/index.css";
import "../src/fonts.css";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      default: "default",
      zenmobi: "zenmobi",
    },
    defaultTheme: "default",
    attributeName: "data-theme",
  }),
];

export default preview;
