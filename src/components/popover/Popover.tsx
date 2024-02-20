import { PropsWithChildren, useRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { useOnClickOutside } from "usehooks-ts";
import { styles } from "./Popover.stylex";

type PopoverProps = PropsWithChildren & {
  content?: React.ReactNode;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

const Popover: React.FC<PopoverProps> = ({ children, content, open, onOpen, onClose }) => {
  const ref = useRef(null);

  const handleClickOutside = () => {
    onClose && onClose();
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref} {...stylex.props(styles.container)}>
      <div onClick={onOpen}>{children}</div>
      {open && <div {...stylex.props(styles.popover)}>{content}</div>}
    </div>
  );
};

export default Popover;
