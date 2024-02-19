import * as stylex from "@stylexjs/stylex";

export const horizontal = stylex.create({
  start: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  end: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
  },
});

export const vertical = stylex.create({
  start: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  end: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export const styles = stylex.create({
  base: (size) => ({
    display: "flex",
    alignItems: "center",
    gap: `${size}px`,
  }),
});
