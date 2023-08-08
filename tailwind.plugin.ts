import plugin from "tailwindcss/plugin";

const switchUiPlugin = plugin.withOptions(function(options: { roundedComponents: boolean }) {
  return function({ addComponents, theme }) {
    const colors = theme("colors");

    const roundedComponents = options.roundedComponents;
    addComponents({
      ".rounded-plug-md": {
        borderRadius: roundedComponents ? "6px" : 0,
      },
      ".rounded-plug-full": {
        borderRadius: roundedComponents ? "9999px" : 0,
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
  };
});

export default switchUiPlugin;
