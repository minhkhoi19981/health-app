import * as stylex from "@stylexjs/stylex";
import { colors, font, fontSize, shadow } from "../../../../theme/tokens.stylex";

export const styles = stylex.create({
  box: {
    width: "100%",
    height: "144px",
    paddingBlock: "4px",
    textAlign: "center",
    background: {
      default: colors.dark600,
    },
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    border: {
      default: `2px solid ${colors.dark600}`,
      ":hover": `2px solid ${colors.primary}`,
    },
    boxShadow: {
      default: "unset",
      ":hover": shadow.small,
    },
    transition: "border 0.25s",
  },
  active: {
    border: `2px solid ${colors.primary}`,
    boxShadow: shadow.small,
  },
  label: {
    fontFamily: font.inter,
    fontSize: fontSize.xxxlarge,
    fontWeight: font.normal,
    letterSpacing: "0.101px",
    color: colors.primary300,
  },
  divider: {
    width: "56px",
    height: "1px",
    background: colors.light,
  },
  describe: {
    fontFamily: font.hiraginoKaku,
    fontSize: fontSize.xlarge,
    fontWeight: font.light,
    color: colors.light,
  },
  gap: {
    gap: "24px",
  },
});
