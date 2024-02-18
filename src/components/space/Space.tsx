import { PropsWithChildren, useMemo } from "react";
import * as stylex from "@stylexjs/stylex";
import { horizontal, styles, vertical } from "./Space.stylex";

type SpaceProps = PropsWithChildren & {
  direction?: "horizontal" | "vertical";
  align?: "start" | "end" | "center";
  size?: number;
  style?: stylex.StyleXStyles;
};

const Space: React.FC<SpaceProps> = ({ direction = "horizontal", align = "center", size = 8, style, children }) => {
  const directionStyles: stylex.StyleXStyles = useMemo(() => {
    if (direction === "vertical") {
      return vertical[align];
    }
    return horizontal[align];
  }, [direction, align]);
  return <div {...stylex.props(styles.base(size), directionStyles, style)}>{children}</div>;
};

export default Space;
