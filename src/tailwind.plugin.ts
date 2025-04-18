import plugin from "tailwindcss/plugin";

const switchUiPlugin = plugin(function ({ addComponents, theme }) {
  addComponents({
    ".sw-ui-rounded-curvature-md": {
      borderRadius: theme("curvature.md", "6px"),
    },
    ".sw-ui-rounded-curvature-full": {
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
    ".sw-ui-avatar-primary": {
      backgroundColor: theme("colors.avatar.primary.bg", "colors.primary.50"),
      color: theme("colors.avatar.primary.text", "colors.primary.400"),
    },
    ".sw-ui-avatar-gray": {
      backgroundColor: theme("colors.avatar.gray.bg", "colors.gray.300"),
      color: theme("colors.avatar.gray.text", "colors.gray.600"),
    },
    ".sw-ui-tab": {
      borderBottomColor: theme("colors.tab.border", "colors.gray.500"),
      color: theme("colors.tab.text", "colors.gray.500"),

      // Uses headlessui
      "&[data-headlessui-state~=selected]": {
        borderBottomColor: theme("colors.tab.selectedBorder", "colors.primary.300"),
        color: theme("colors.tab.selectedText", "colors.primary.300"),
      },
    },
    ".sw-ui-slider": {
      backgroundColor: theme("colors.slider.bg", "colors.primary.300"),
      accentColor: theme("colors.slider.accent", "colors.primary.300"),
      "&:hover": {
        accentColor: theme("colors.slider.hover", "colors.primary.400"),
      },
    },
    ".sw-ui-checkbox-primary": {
      "border-color": theme("colors.checkbox.primary.border", "colors.primary.300"),
      "&:checked": {
        background: theme("colors.checkbox.primary.checked", "colors.primary.300"),
      },
      "&:hover": {
        background: theme("colors.checkbox.primary.hover", "colors.primary.25"),
      },
    },
    ".sw-ui-input": {
      caretColor: theme("colors.input.caret", "colors.primary.100"),
      "&:focus": {
        borderColor: theme("colors.input.focus", "colors.primary.100"),
      },
    },
    ".sw-ui-badge-primary": {
      backgroundColor: theme("colors.badge.primary.bg", "colors.primary.25"),
      color: theme("colors.badge.primary.text", "colors.primary.700"),
      "&[data-outline=true]": {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: theme("colors.badge.primary.border", "colors.primary.300"),
      },
      "&[data-opacity=true]": {
        backgroundColor: theme("colors.badge.primary.bgOpacity", "colors.primary.300"),
        opacity: "0.1",
      },
    },
    ".sw-ui-badge-secondary": {
      backgroundColor: theme("colors.badge.secondary.bg", "colors.secondary.25"),
      color: theme("colors.badge.secondary.text", "colors.secondary.700"),
      "&[data-outline=true]": {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: theme("colors.badge.secondary.border", "colors.secondary.300"),
      },
      "&[data-opacity=true]": {
        backgroundColor: theme("colors.badge.secondary.bgOpacity", "colors.secondary.300"),
        opacity: "0.1",
      },
    },
    ".sw-ui-badge-success": {
      backgroundColor: theme("colors.success.100", "colors.success.100"),
      color: theme("colors.success.700", "colors.success.700"),
      "&[data-outline=true]": {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: theme("colors.success.300", "colors.success.300"),
      },
      "&[data-opacity=true]": {
        backgroundColor: theme("colors.success.300", "colors.success.300"),
        opacity: "0.1",
      },
    },
    ".sw-ui-badge-warning": {
      backgroundColor: theme("colors.warning.100", "colors.warning.100"),
      color: theme("colors.warning.700", "colors.warning.700"),
      "&[data-outline=true]": {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: theme("colors.warning.300", "colors.warning.300"),
      },
      "&[data-opacity=true]": {
        backgroundColor: theme("colors.warning.300", "colors.warning.300"),
        opacity: "0.1",
      },
    },
    ".sw-ui-badge-danger": {
      backgroundColor: theme("colors.error.100", "colors.error.100"),
      color: theme("colors.error.700", "colors.error.700"),
      "&[data-outline=true]": {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: theme("colors.error.300", "colors.error.300"),
      },
      "&[data-opacity=true]": {
        backgroundColor: theme("colors.error.300", "colors.error.300"),
        opacity: "0.1",
      },
    },
  });
});
export default switchUiPlugin;
