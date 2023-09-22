import plugin from "tailwindcss/plugin";

const switchUiPlugin = plugin(function ({ addComponents, theme }) {
  addComponents({
    ".rounded-plug-md": {
      borderRadius: theme("curvature.md", "6px"),
    },
    ".rounded-plug-full": {
      borderRadius: theme("curvature.full", "9999px"),
    },
    ".btn-primary": {
      backgroundColor: theme("colors.btn.primary.bg"),
      color: theme("colors.btn.primary.text"),
      "&:hover": {
        backgroundColor: theme("colors.btn.primary.hover"),
      },
      "&:focus": {
        backgroundColor: theme("colors.btn.primary.focus"),
      },
      "&:active": {
        backgroundColor: theme("colors.btn.primary.active"),
      },
    },
    ".btn-outline": {
      backgroundColor: theme("colors.btn.outline.bg"),
      color: theme("colors.btn.outline.text"),
      "&:hover": {
        backgroundColor: theme("colors.btn.outline.hover"),
      },
      "&:focus": {
        backgroundColor: theme("colors.btn.outline.focus"),
      },
      "&:active": {
        backgroundColor: theme("colors.btn.outline.active"),
      },
    },
    ".btn-invisible": {
      backgroundColor: theme("colors.btn.invisible.bg"),
      color: theme("colors.btn.invisible.text"),
      "&:hover": {
        backgroundColor: theme("colors.btn.invisible.hover"),
      },
      "&:focus": {
        backgroundColor: theme("colors.btn.invisible.focus"),
      },
      "&:active": {
        backgroundColor: theme("colors.btn.invisible.active"),
      },
    },
    ".avatar-primary": {
      backgroundColor: theme("colors.avatar.primary.bg"),
      color: theme("colors.avatar.primary.text"),
    },
    ".avatar-gray": {
      backgroundColor: theme("colors.avatar.gray.bg"),
      color: theme("colors.avatar.gray.text"),
    },
    ".tab": {
      borderBottomColor: theme("colors.tab.border"),
      color: theme("colors.tab.text"),

      // Uses headlessui
      "&[data-headlessui-state~=selected]": {
        borderBottomColor: theme("colors.tab.selectedBorder"),
        color: theme("colors.tab.selectedText"),
      },
    },
    ".slider": {
      backgroundColor: theme("colors.slider.bg"),
      accentColor: theme("colors.slider.accent"),
      "&:hover": {
        accentColor: theme("colors.slider.hover"),
      },
    },
    ".checkbox": {
      border: theme("colors.checkbox.border"),
      "&:checked": {
        background: theme("colors.checkbox.bg"),
      },
    },
    ".input": {
      caretColor: theme("colors.input.carret"),
      "&:focus": {
        borderColor: theme("colors.input.focus"),
      },
    },
  });
});
export default switchUiPlugin;
