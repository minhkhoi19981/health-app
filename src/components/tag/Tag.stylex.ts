import * as stylex from "@stylexjs/stylex";
import { base, colors } from "../../theme/tokens.stylex";

export const styles = stylex.create({
  tag: {
    color: colors.primary,
    cursor: "pointer",
    paddingInline: "6px",
    paddingBlock: "2px",
    borderRadius: base.borderRadius,
    background: {
      default: "transparent",
      ":hover": "#f5f5f5",
    },
    transition: "background 0.25s",
  },
});
