import * as stylex from "@stylexjs/stylex";
import { colors, font } from "../../theme/tokens.stylex";

export const styles = stylex.create({
  card: (image) => ({
    position: "relative",
    width: "234px",
    height: "234px",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }),
  label: {
    fontFamily: font.inter,
    fontWeight: font.normal,
    color: colors.light,
    fontSize: "15px",
    letterSpacing: "0.15px",
    paddingInline: "8px",
    paddingBlock: "7px",
    background: colors.primary300,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 2,
  },
});
