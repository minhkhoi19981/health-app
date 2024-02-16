import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
  primaryText: { default: "#414141" },
  light: { default: "#FFFFFF" },
  // primary
  primary300: { default: "#FFCC21" },
  primary400: { default: "#FF963C" },
  primary500: { default: "#EA6C00" },
  primary300400: { default: "linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)" },
  // secondary
  secondary300: { default: "#8FE9D0" },
  // dark
  dark500: { default: "#414141" },
  dark600: { default: "#2E2E2E" },
  // gray
  gray400: { default: "#777777" },
});

export const spacing = stylex.defineVars({
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
});
