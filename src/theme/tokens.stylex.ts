import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
  primaryText: { default: "#414141" },
  light: { default: "#FFFFFF" },
  alert: { default: "rgb(202, 253, 245)" },
  // primary
  primary300: { default: "#FFCC21" },
  primary: { default: "#FF963C" }, // primary400
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

export const base = stylex.defineVars({
  borderRadius: "8px",
  border: "1px solid rgb(228, 228, 231)",
  paddingCard: "24px",
});

export const font = stylex.defineVars({
  normal: "400",
  semibold: "600",
  bold: "bold",
});
