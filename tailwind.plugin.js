// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const plugin = require("tailwindcss/plugin");
const { bool } = require("prop-types");

// eslint-disable-next-line no-undef
module.exports = plugin.withOptions(function (
  options = {
    roundedComponents: bool,
  },
) {
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
