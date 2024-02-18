import * as stylex from "@stylexjs/stylex";
import { colors, fontSize } from "../../theme/tokens.stylex";

export const styles = stylex.create({
  badge: {
    position: "relative",
  },
  count: {
    position: "absolute",
    insetInlineEnd: "2px",
    insetBlockStart: "8px",
    transform: "translate(50%,-50%)",
    transformOrigin: "100% 0%",
    whiteSpace: "nowrap",
    color: colors.light,
    background: colors.primary500,
    fontSize: fontSize.xsmall,
    borderRadius: "8px",
    height: "16px",
    minWidth: "16px",
    textAlign: "center",
  },
});
