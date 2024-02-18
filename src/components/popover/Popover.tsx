import { PropsWithChildren } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Popover.stylex";

type PopoverProps = PropsWithChildren & {
  content?: React.ReactNode;
  open?: boolean;
  onOpen?: () => void;
};

const Popover: React.FC<PopoverProps> = ({ children, content, open, onOpen }) => {
  return (
    <div {...stylex.props(styles.container)}>
      <div onClick={onOpen}>{children}</div>
      {open && <div {...stylex.props(styles.popover)}>{content}</div>}
    </div>
  );
};

export default Popover;
