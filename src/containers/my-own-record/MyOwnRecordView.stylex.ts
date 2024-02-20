import * as stylex from "@stylexjs/stylex";
import { devices } from "../../theme/tokens.stylex";

export const styles = stylex.create({
  container: {
    maxWidth: devices.tablets,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    paddingInline: "24px",
    paddingBlock: "32px",
    gap: "32px",
  },
});
