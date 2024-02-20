import * as stylex from "@stylexjs/stylex";
import { devices } from "../../theme/tokens.stylex";

export const styles = stylex.create({
  container: {
    marginBottom: "52px",
  },
  firstColumn: {
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
  },
  filterButton: {
    maxWidth: devices.tablets,
    margin: "auto",
    paddingInline: "24px",
    marginBlock: "28px",
  },
  gridFood: {
    maxWidth: devices.tablets,
    margin: "auto",
    paddingInline: "24px",
  },
  chart: {},
});
