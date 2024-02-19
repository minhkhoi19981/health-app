import * as stylex from "@stylexjs/stylex";
import { colors, devices, font, fontSize, sizeLayout } from "../../../theme/tokens.stylex";

export const styles = stylex.create({
  footer: {
    width: "100%",
    background: colors.dark500,
    height: sizeLayout.footer,
  },
  box: {
    fontFamily: font.hiraginoKaku,
    fontSize: fontSize.xlarge,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    listStyleType: "none",
    paddingLeft: "0px",
    marginBlock: "0px",
    maxWidth: devices.tablets,
    margin: "auto",
    height: "100%",
    gap: "32px",
    paddingInline: "24px",
  },
  menu: {
    cursor: "pointer",
    textAlign: "center",
    color: {
      default: colors.light,
      ":hover": colors.primary,
    },
  },
});
