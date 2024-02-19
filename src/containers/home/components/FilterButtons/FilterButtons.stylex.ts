import * as stylex from "@stylexjs/stylex";
import { colors, font, fontSize } from "../../../../theme/tokens.stylex";

export const styles = stylex.create({
  filters: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    width: "56px",
    height: "56px",
  },
  button: {
    clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
    width: "136px",
    height: "136px",
    background: colors.primary300400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.light,
    fontFamily: font.inter,
    fontSize: fontSize.xxlarge,
    fontWeight: font.normal,
    lineHeight: "24px",
    cursor: "pointer",
    opacity: {
      default: 1,
      ":hover": 0.8,
    },
  },
});
