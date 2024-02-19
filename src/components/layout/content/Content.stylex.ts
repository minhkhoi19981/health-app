import * as stylex from "@stylexjs/stylex";
import { sizeLayout } from "../../../theme/tokens.stylex";

export const styles = stylex.create({
  content: {
    height: `calc(100vh - ${sizeLayout.header} - ${sizeLayout.footer})`,
  },
});
