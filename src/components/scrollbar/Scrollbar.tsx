import { forwardRef, PropsWithChildren } from "react";
import SimpleBar from "simplebar-react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Scrollbar.stylex";

type ScrollbarProps = PropsWithChildren & {
  style?: stylex.StyleXStyles;
  id?: string;
};

const Scrollbar = forwardRef(({ children, style, id }: ScrollbarProps, ref) => {
  return (
    <SimpleBar
      id={id}
      {...stylex.props(styles.base, style)}
      scrollableNodeProps={{
        ref,
      }}
      clickOnTrack={false}
      autoHide={false}
    >
      {children}
    </SimpleBar>
  );
});

export default Scrollbar;
