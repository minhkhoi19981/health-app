import * as stylex from "@stylexjs/stylex";
import { colors } from "../../theme/tokens.stylex";

export const varColorIconUp = stylex.defineVars({
  color: colors.gray400,
});

export const styles = stylex.create({
  button: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: {
      default: `1px solid ${colors.gray400}`,
      ":hover": `1px solid ${colors.primary}`,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    background: {
      default: colors.light,
      ":hover": colors.primary,
    },
    [varColorIconUp.color]: {
      default: colors.gray400,
      ":hover": colors.light,
    },
    transition: "background 0.25s",
    position: "fixed",
    zIndex: 100,
    bottom: "160px",
    right: "24px",
  },
  icon: {
    width: "18px",
    height: "10px",
    background: varColorIconUp.color,
  },
});
