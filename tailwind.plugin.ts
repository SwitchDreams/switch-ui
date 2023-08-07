import plugin from "tailwindcss/plugin";

const switchUiPlugin = plugin.withOptions(function (options: { roundedComponents: boolean }) {
  return function ({ addComponents }) {
    const roundedComponents = options.roundedComponents;
    addComponents({
      ".rounded-plug-md": {
        borderRadius: roundedComponents ? "6px" : 0,
      },
      ".rounded-plug-full": {
        borderRadius: roundedComponents ? "9999px" : 0,
      },
    });
  };
});

export default switchUiPlugin;
