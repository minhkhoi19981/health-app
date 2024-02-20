import * as stylex from "@stylexjs/stylex";
import { styles } from "./ScrollToTop.stylex";
import { Icon } from "..";
import { IconUp } from "~/assets/icons";

type ScrollToTopProps = {
  onTop: () => void;
};

const ScrollToTop: React.FC<ScrollToTopProps> = ({ onTop }) => {
  return (
    <div {...stylex.props(styles.button)} onClick={onTop}>
      <Icon icon={IconUp} style={styles.icon} />
    </div>
  );
};

export default ScrollToTop;
