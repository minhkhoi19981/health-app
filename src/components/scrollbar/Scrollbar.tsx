import { forwardRef, PropsWithChildren } from "react";
import SimpleBar from "simplebar-react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Scrollbar.stylex";

type ScrollbarProps = PropsWithChildren & {
  style?: stylex.StyleXStyles;
};

const Scrollbar = forwardRef(({ children, style }: ScrollbarProps, ref) => {
  return (
    <SimpleBar
      {...stylex.props(styles.base, style)}
      scrollableNodeProps={{
        ref,
      }}
      clickOnTrack={false}
    >
      {children}
    </SimpleBar>
  );
});

export default Scrollbar;
