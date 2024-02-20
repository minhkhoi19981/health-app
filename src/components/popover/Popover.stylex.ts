import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  container: {
    position: "relative",
  },
  popover: {
    position: "absolute",
    minWidth: "270px",
    insetInlineEnd: "2px",
    zIndex: 10,
  },
});
