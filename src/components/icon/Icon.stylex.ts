import * as stylex from "@stylexjs/stylex";
import { colors } from "../../theme/tokens.stylex";

export const tokens = stylex.defineVars({
  width: "32px",
  height: "32px",
  color: colors.primary,
});

export const styles = stylex.create({
  base: {
    color: tokens.color,
  },
  default: {
    width: tokens.width,
    height: tokens.height,
  },
  small: {
    width: "24px",
    height: "24px",
  },
  large: {
    width: "48px",
    height: "48px",
  },
});
