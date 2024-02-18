import * as stylex from "@stylexjs/stylex";
import { colors, font, fontSize } from "../../../../theme/tokens.stylex";

export const styles = stylex.create({
  icon: {
    cursor: "pointer",
  },
  boxPopover: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  iconClose: {
    background: colors.dark500,
    cursor: "pointer",
    zIndex: 2,
  },
  popover: {
    background: colors.gray400,
    fontFamily: font.hiraginoKaku,
    fontSize: fontSize.xlarge,
    lineHeight: "26px",
    letterSpacing: "0px",
    listStyleType: "none",
    paddingLeft: "0px",
    marginBlock: "0px",
    width: "100%",
  },
  boxItem: {
    borderBottom: "1px solid rgba(255, 255, 255, .15)",
  },
  item: {
    paddingBlock: "12px",
    paddingInline: "24px",
    borderBottom: "1px solid rgba(46, 46, 46, .25)",
    cursor: "pointer",
    color: {
      default: colors.light,
      ":hover": colors.primary,
    },
  },
});
