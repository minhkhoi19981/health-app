import * as stylex from "@stylexjs/stylex";
import { colors, font, shadow } from "../../../../theme/tokens.stylex";

export const styles = stylex.create({
  item: {
    width: "288px",
    height: "288px",
    background: colors.primary300,
    padding: "18px",
    position: "relative",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: {
      default: "unset",
      ":hover": shadow.small,
    },
    transition: "boxShadow 0.25s",
  },
  background: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% - 36px)",
    height: "calc(100% - 36px)",
    background: "#494949",
    opacity: 0.7,
    zIndex: 2,
  },
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    zIndex: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
  },
  title: {
    fontFamily: font.inter,
    fontWeight: font.normal,
    letterSpacing: "0.13px",
    color: colors.primary300,
    fontSize: "25px",
  },
  content: {
    fontFamily: font.hiraginoKaku,
    fontWeight: font.light,
    color: colors.light,
    background: colors.primary,
    maxWidth: "160px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "24px",
    width: "100%",
  },
});
