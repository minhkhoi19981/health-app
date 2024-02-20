import * as stylex from "@stylexjs/stylex";
import { styles } from "./Icon.stylex";

type IconProps = {
  icon: string;
  name?: string;
  size?: "small" | "default" | "large";
  style?: stylex.StyleXStyles;
  onClick?: () => void;
  color?: string;
};

const Icon: React.FC<IconProps> = ({ icon, style, name, size = "default", onClick, color = "currentColor" }) => {
  return <div id={name} onClick={onClick} {...stylex.props(styles.base(icon, color), styles[size], style)} />;
  {
  }
};

export default Icon;
