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
  boxIconClose: {
    background: colors.dark500,
  },
  iconClose: {
    cursor: "pointer",
    zIndex: 2,
  },
  popover: {
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
    cursor: "pointer",
    background: {
      default: colors.gray400,
      ":hover": colors.primary300,
    },
    color: colors.light,
  },
  item: {
    paddingBlock: "22px",
    paddingInline: "32px",
    borderBottom: "1px solid rgba(46, 46, 46, .25)",
  },
});
