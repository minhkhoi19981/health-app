import * as stylex from "@stylexjs/stylex";

export const horizontal = stylex.create({
  start: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  end: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export const vertical = stylex.create({
  start: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  end: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export const styles = stylex.create({
  base: (size) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: `${size}px`,
  }),
});
