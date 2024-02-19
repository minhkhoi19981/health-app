import * as stylex from "@stylexjs/stylex";
import { colors, devices, sizeLayout } from "../../../theme/tokens.stylex";

export const varLabelMenu = stylex.defineVars({
  color: colors.light,
});

export const styles = stylex.create({
  header: {
    width: "100%",
    background: colors.dark500,
    height: sizeLayout.header,
  },
  box: {
    display: "grid",
    flexDirection: "row",
    alignItems: "center",
    gridTemplateColumns: "120px 1fr",
    height: "100%",
    maxWidth: devices.tablets,
    margin: "auto",
    paddingInline: "24px",
  },
  logo: {
    width: "109px",
    height: "40px",
  },
  menus: {
    display: "flex",
    flexDirection: "row",
    gap: "48px",
    justifyContent: "flex-end",
  },
  menuItem: {
    cursor: "pointer",
    [varLabelMenu.color]: {
      default: colors.light,
      ":hover": colors.primary,
    },
    textAlign: "center",
  },
  labelMenu: {
    color: varLabelMenu.color,
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "23px",
    textAlign: "center",
  },
});
