import * as stylex from "@stylexjs/stylex";
import { colors, font } from "../../theme/tokens.stylex";

export const tokens = stylex.defineVars({
  bgColor: colors.primary,
  textColor: "white",
  cornerRadius: "6px",
  paddingBlock: "12px",
  paddingInline: "16px",
});

export const styles = stylex.create({
  base: {
    appearance: "none",
    borderWidth: 0,
    borderStyle: "none",
    backgroundColor: tokens.bgColor,
    color: tokens.textColor,
    borderRadius: tokens.cornerRadius,
    paddingBlock: tokens.paddingBlock,
    paddingInline: tokens.paddingInline,
    fontSize: "18px",
    fontWeight: font.light,
    cursor: "pointer",
    transition: "opacity 0.25s",
    opacity: {
      default: 1,
      ":hover": 0.8,
    },
  },
  block: {
    width: "100%",
  },
});
