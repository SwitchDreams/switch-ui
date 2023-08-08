import plugin from "tailwindcss/plugin";

const switchUiPlugin = plugin(function ({ addComponents, theme }) {
  const colors = theme("colors");

  addComponents({
    ".rounded-plug-md": {
      borderRadius: theme("curvature.md") != undefined ? theme("curvature.md") : "6px",
    },
    ".rounded-plug-full": {
      borderRadius: theme("curvature.full") != undefined ? theme("curvature.full") : "9999px",
    },
    ".btn-primary": {
      backgroundColor: colors.btn.primary.bg,
      color: colors.btn.primary.text,
      "&:hover": {
        backgroundColor: colors.btn.primary.hover,
      },
      "&:focus": {
        backgroundColor: colors.btn.primary.focus,
      },
      "&:active": {
        backgroundColor: colors.btn.primary.active,
      },
    },
    ".btn-outline": {
      backgroundColor: colors.btn.outline.bg,
      color: colors.btn.outline.text,
      "&:hover": {
        backgroundColor: colors.btn.outline.hover,
      },
      "&:focus": {
        backgroundColor: colors.btn.outline.focus,
      },
      "&:active": {
        backgroundColor: colors.btn.outline.active,
      },
    },
    ".btn-invisible": {
      backgroundColor: colors.btn.invisible.bg,
      color: colors.btn.invisible.text,
      "&:hover": {
        backgroundColor: colors.btn.invisible.hover,
      },
      "&:focus": {
        backgroundColor: colors.btn.invisible.focus,
      },
      "&:active": {
        backgroundColor: colors.btn.invisible.active,
      },
    },
  });
});
export default switchUiPlugin;
