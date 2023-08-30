import colors from "../../src/constants/colors";

export default {
  ...colors,
  btn: {
    primary: {
      bg: colors.primary["300"],
      hover: colors.primary["400"],
      active: colors.primary["500"],
      focus: colors.primary["300"],
      text: colors.gray.white,
    },
    outline: {
      bg: colors.gray.white,
      hover: colors.primary["25"],
      active: colors.primary["100"],
      focus: colors.gray.white,
      text: colors.primary["300"],
    },
    invisible: {
      bg: colors.gray.white,
      hover: colors.gray["50"],
      active: colors.gray["100"],
      focus: colors.gray["white"],
      text: colors.gray["800"],
    },
  },
};