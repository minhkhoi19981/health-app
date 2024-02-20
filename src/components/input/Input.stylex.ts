import * as stylex from "@stylexjs/stylex";
import { base, font, spacing } from "../../theme/tokens.stylex";

export const tokens = stylex.defineVars({
  cornerRadius: "6px",
  paddingInline: "12px",
  paddingBlock: "11px",
});

export const styles = stylex.create({
  box: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xsmall,
  },
  label: {
    fontWeight: font.semibold,
  },
  input: {
    borderRadius: tokens.cornerRadius,
    border: base.border,
    width: "-webkit-fill-available",
    display: "block",
    paddingInline: tokens.paddingInline,
    paddingBlock: tokens.paddingBlock,
    fontSize: "14px",
  },
  error: {
    fontSize: "12px",
    color: "red",
  },
});
