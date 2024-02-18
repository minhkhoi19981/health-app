import { PropsWithChildren } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Badge.stylex";

type BadgeProps = {
  count?: number;
} & PropsWithChildren;

const Badge: React.FC<BadgeProps> = ({ count, children }) => {
  return (
    <div {...stylex.props(styles.badge)}>
      {children}
      {count && <sup {...stylex.props(styles.count)}>{count}</sup>}
    </div>
  );
};

export default Badge;
