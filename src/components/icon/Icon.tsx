import * as stylex from "@stylexjs/stylex";
import { styles } from "./Icon.stylex";

type IconProps = {
  icon: string;
  name?: string;
  size?: "small" | "default" | "large";
  style?: stylex.StyleXStyles;
  onClick?: () => void;
};

const Icon: React.FC<IconProps> = ({ icon, style, name, size = "default", onClick }) => {
  return <img onClick={onClick} src={icon} alt={name} {...stylex.props(styles.base, styles[size], style)} />;
};

export default Icon;
