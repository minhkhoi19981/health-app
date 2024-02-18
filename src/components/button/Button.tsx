import { ButtonHTMLAttributes } from "react";
import * as stylex from "@stylexjs/stylex";
import { tokens, styles } from "./Button.stylex";

type ButtonProps = {
  theme?: stylex.Theme<typeof tokens>;
  block?: boolean;
  style?: stylex.StyleXStyles;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style" & {
    style?: stylex.StyleXStyles;
  }
>;

const Button: React.FC<ButtonProps> = ({ children, style, theme, block, ...props }) => {
  return (
    <button {...props} {...stylex.props(theme, styles.base, block && styles.block, style as stylex.StyleXStyles)}>
      {children}
    </button>
  );
};

export default Button;
