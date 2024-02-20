import * as stylex from "@stylexjs/stylex";
import { font } from "../../theme/tokens.stylex";

export const styles = stylex.create({
  container: {
    width: "234px",
    height: "234px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginBottom: "6px",
  },
  card: {
    width: "100%",
    height: "100%",
  },
  content: {
    fontFamily: font.hiraginoKaku,
    fontSize: "15px",
    lineHeight: "22px",
    fontWeight: font.light,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    paddingBottom: 10,
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "4px",
  },
});
