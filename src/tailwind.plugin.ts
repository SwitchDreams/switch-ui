/* eslint-disable tree-shaking/no-side-effects-in-initialization */
import plugin from "tailwindcss/plugin";

const switchUiPlugin = plugin(function ({ addComponents, theme }) {
  addComponents({
    ".rounded-plug-md": {
      borderRadius: theme("curvature.md", "6px"),
    },
    ".rounded-plug-full": {
      borderRadius: theme("curvature.full", "9999px"),
    },
    ".sw-ui-btn-primary": {
      backgroundColor: theme("colors.btn.primary.bg", "colors.primary.300"),
      color: theme("colors.btn.primary.text", "colors.white"),
      "&:hover": {
        backgroundColor: theme("colors.btn.primary.hover", "colors.primary.400"),
      },
      "&:focus": {
        backgroundColor: theme("colors.btn.primary.focus", "colors.primary.300"),
      },
      "&:active": {
        backgroundColor: theme("colors.btn.primary.active", "colors.primary.500"),
      },
    },
    ".sw-ui-btn-outline": {
      backgroundColor: theme("colors.btn.outline.bg", "transparent"),
      color: theme("colors.btn.outline.text", "colors.primary.300"),
      "&:hover": {
        backgroundColor: theme("colors.btn.outline.hover", "colors.primary.25"),
      },
      "&:focus": {
        backgroundColor: theme("colors.btn.outline.focus", "colors.white"),
      },
      "&:active": {
        backgroundColor: theme("colors.btn.outline.active", "colors.primary.100"),
      },
    },
    ".sw-ui-btn-invisible": {
      backgroundColor: theme("colors.btn.invisible.bg", "transparent"),
      color: theme("colors.btn.invisible.text", "colors.gray.800"),
      "&:hover": {
        backgroundColor: theme("colors.btn.invisible.hover", "colors.gray.50"),
      },
      "&:focus": {
        backgroundColor: theme("colors.btn.invisible.focus", "colors.gray.white"),
      },
      "&:active": {
        backgroundColor: theme("colors.btn.invisible.active", "colors.gray.100"),
      },
    },
    ".avatar-primary": {
      backgroundColor: theme("colors.avatar.primary.bg", "colors.primary.50"),
      color: theme("colors.avatar.primary.text", "colors.primary.400"),
    },
    ".avatar-gray": {
      backgroundColor: theme("colors.avatar.gray.bg", "colors.gray.300"),
      color: theme("colors.avatar.gray.text", "colors.gray.600"),
    },
    ".tab": {
      borderBottomColor: theme("colors.tab.border", "colors.gray.500"),
      color: theme("colors.tab.text", "colors.gray.500"),

      // Uses headlessui
      "&[data-headlessui-state~=selected]": {
        borderBottomColor: theme("colors.tab.selectedBorder", "colors.primary.300"),
        color: theme("colors.tab.selectedText", "colors.primary.300"),
      },
    },
    ".slider": {
      backgroundColor: theme("colors.slider.bg", "colors.primary.300"),
      accentColor: theme("colors.slider.accent", "colors.primary.300"),
      "&:hover": {
        accentColor: theme("colors.slider.hover", "colors.primary.400"),
      },
    },
    ".checkbox-primary": {
      "border-color": theme("colors.checkbox.primary.border", "colors.primary.300"),
      "&:checked": {
        background: theme("colors.checkbox.primary.checked", "colors.primary.300"),
      },
      "&:hover": {
        background: theme("colors.checkbox.primary.hover", "colors.primary.25"),
      },
    },
    ".input": {
      caretColor: theme("colors.input.caret", "colors.primary.100"),
      "&:focus": {
        borderColor: theme("colors.input.focus", "colors.primary.100"),
      },
    },
  });
});
export default switchUiPlugin;
