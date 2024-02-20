import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../../theme/tokens.stylex";

export const styles = stylex.create({
  container: {
    width: "100%",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "4px",
  },
  item: {
    width: "100%",
    maxHeight: "234px",
  },
  btnLoadMore: {
    marginTop: "32px",
    width: "296px",
    height: "56px",
    background: colors.primary300400,
  },
});
