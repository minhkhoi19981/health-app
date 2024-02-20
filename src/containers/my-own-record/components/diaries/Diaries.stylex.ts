import * as stylex from "@stylexjs/stylex";
import { font, fontSize } from "../../../../theme/tokens.stylex";

export const itemStyles = stylex.create({
  box: {
    border: "2px solid #707070",
    height: "200px",
    textAlign: "left",
    padding: "16px",
  },
  text: {
    fontFamily: font.inter,
    fontWeight: font.normal,
    fontSize: fontSize.xlarge,
    letterSpacing: "0.09px",
  },
  content: {
    marginTop: "6px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
  },
});

export const styles = stylex.create({
  title: {
    fontFamily: font.inter,
    fontWeight: font.normal,
    fontSize: fontSize.xxxlarge,
    letterSpacing: "0.11px",
  },
  left: {
    textAlign: "left",
  },
});
