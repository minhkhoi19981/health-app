import * as stylex from "@stylexjs/stylex";

export const devices = stylex.defineVars({
  mobile: { default: "768px" },
  tablets: { default: "1024px" },
  desktops: { default: "1200px" },
});

export const sizeLayout = stylex.defineVars({
  header: { default: "64px" },
  footer: { default: "128px" },
});

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
  // error
  error: "#ff4d4f",
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
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "bold",
  hiraginoKaku: "Hiragino Kaku Gothic Pro",
  inter: "Inter",
});

export const fontSize = stylex.defineVars({
  xsmall: "10px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "18px",
  xxlarge: "20px",
});

export const shadow = stylex.defineVars({
  small: "rgb(255, 255, 255) 0px 0px 0px 1px",
});
