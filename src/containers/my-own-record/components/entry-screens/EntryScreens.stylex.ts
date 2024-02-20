import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "32px",
  },
});
