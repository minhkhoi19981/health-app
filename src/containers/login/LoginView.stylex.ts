import * as stylex from "@stylexjs/stylex";
import { base, colors, font, spacing } from "../../theme/tokens.stylex";

const styles = stylex.create({
  container: {
    width: "100vw",
    height: "100vh",
    display: {
      default: "flex",
    },
    justifyContent: "center",
    alignItems: "center",
  },
  boxLogin: {
    border: base.border,
    borderRadius: base.borderRadius,
    padding: base.paddingCard,
    maxWidth: "448px",
    width: "100%",
    gap: "12px",
    display: "flex",
    flexDirection: "column",
  },
  form: {
    marginTop: "8px",
    gap: "12px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: font.semibold,
    lineHeight: "0px",
  },
  alert: {
    minHeight: "36px",
    borderRadius: base.borderRadius,
    background: colors.alert,
    display: "flex",
    alignItems: "center",
    gap: spacing.small,
    paddingInline: spacing.medium,
  },
  buttonBlackBg: {
    backgroundColor: "rgb(33, 43, 54)",
    fontSize: "14px",
    fontWeight: font.semibold,
  },
  navigate: {
    background: "#fff7e6",
  },
});

export { styles };
