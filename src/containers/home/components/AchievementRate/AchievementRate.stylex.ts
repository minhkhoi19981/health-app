import * as stylex from "@stylexjs/stylex";
import { colors, font, fontSize } from "../../../../theme/tokens.stylex";

export const styles = stylex.create({
  box: {
    height: "370px",
    overflow: "hidden",
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  rate: {
    position: "absolute",
    width: "181px",
    height: "181px",
    color: colors.light,
    zIndex: 10,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  currentDay: {
    fontFamily: font.inter,
    fontWeight: font.normal,
    fontSize: fontSize.xlarge,
    lineHeight: "22px",
    marginRight: "6px",
  },
  valueRate: {
    fontFamily: font.inter,
    fontWeight: font.normal,
    fontSize: "25px",
    lineHeight: "30px",
  },
});
