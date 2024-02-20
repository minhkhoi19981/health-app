import * as stylex from "@stylexjs/stylex";
import { colors, font, fontSize } from "../../../../theme/tokens.stylex";

export const styles = stylex.create({
  container: {
    background: "#2E2E2E",
    paddingBlock: "16px",
  },
  paddingLeft: {
    paddingLeft: "72px",
  },
  title: {
    fontFamily: font.inter,
    fontWeight: font.normal,
    fontSize: "15px",
    letterSpacing: "0.15px",
    color: colors.light,
    lineHeight: "18px",
  },
  date: {
    fontFamily: font.inter,
    fontWeight: font.normal,
    fontSize: fontSize.xxxlarge,
    letterSpacing: "0.11px",
    color: colors.light,
  },
  list: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px 46px",
    color: colors.light,
    paddingRight: "24px",
  },
  scroll: {
    height: "220px",
  },
  item: {
    borderBottom: `1px solid ${colors.gray400}`,
    paddingBottom: "4px",
  },
  firstRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  labelItem: {
    fontFamily: font.hiraginoKaku,
    fontWeight: font.light,
    fontSize: "15px",
    letterSpacing: "0.08px",
    color: colors.light,
  },
  timeItem: {
    fontFamily: font.inter,
    fontWeight: font.normal,
    fontSize: fontSize.xlarge,
    letterSpacing: "0.09px",
    color: colors.primary300,
  },
  kcalItem: {
    fontFamily: font.inter,
    fontWeight: font.normal,
    fontSize: "15px",
    letterSpacing: "0.08px",
    color: colors.primary300,
  },
});
