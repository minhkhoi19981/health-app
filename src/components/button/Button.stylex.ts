import * as stylex from "@stylexjs/stylex";
import { colors } from "../../theme/tokens.stylex";

export const tokens = stylex.defineVars({
  bgColor: colors.primary,
  textColor: "white",
  cornerRadius: "8px",
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
    fontSize: "14px",
    fontWeight: "600",
  },
  block: {
    width: "100%",
  },
});
