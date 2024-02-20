import { PropsWithChildren } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Tag.stylex";

type TagProps = PropsWithChildren;

const Tag: React.FC<TagProps> = ({ children }) => {
  return <div {...stylex.props(styles.tag)}>{children}</div>;
};

export default Tag;
