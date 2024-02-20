import * as stylex from "@stylexjs/stylex";
import { devices, font } from "../../theme/tokens.stylex";

export const styles = stylex.create({
  container: {
    maxWidth: devices.tablets,
    margin: "auto",
    paddingInline: "24px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    minHeight: "100vh",
  },
  title: {
    fontFamily: font.inter,
    fontSize: "32px",
    lineHeight: "0px",
  },
  gif: {
    maxHeight: "400px",
    maxWidth: "500px",
  },
});
