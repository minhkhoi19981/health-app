import * as stylex from "@stylexjs/stylex";
import { devices } from "../../theme/tokens.stylex";

export const styles = stylex.create({
  container: {
    maxWidth: devices.tablets,
    margin: "auto",
    paddingInline: "24px",
    paddingBlock: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "42px",
  },
});
