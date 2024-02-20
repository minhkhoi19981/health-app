import * as stylex from "@stylexjs/stylex";
import { colors, font, fontSize } from "../../../../theme/tokens.stylex";

export const styles = stylex.create({
  container: {
    background: "#2E2E2E",
    paddingBlock: "16px",
  },
  button: {
    width: "56px",
    height: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    background: {
      default: colors.light,
      ":hover": colors.primary300,
    },
    borderRadius: "12px",

    color: {
      default: colors.primary300,
      ":hover": colors.light,
    },
    transition: "background 0.25s",
  },
  paddingLeft: {
    paddingLeft: "72px",
  },
  title: {
    fontFamily: font.inter,
    fontWeight: font.normal,
    fontSize: "15px",
    letterSpacing: "0.15px",
    color: colors.light,
    lineHeight: "18px",
  },
  date: {
    fontFamily: font.inter,
    fontWeight: font.normal,
    fontSize: fontSize.xxxlarge,
    letterSpacing: "0.11px",
    color: colors.light,
  },
});
