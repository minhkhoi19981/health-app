import * as stylex from "@stylexjs/stylex";
import { styles } from "./CardPhoto.stylex";

type CardPhotoProps = {
  style?: stylex.StyleXStyles;
  image: string;
  label: string;
};

const CardPhoto: React.FC<CardPhotoProps> = ({ style, image, label }) => {
  return (
    <div {...stylex.props(styles.card(image), style)}>
      <span {...stylex.props(styles.label)}>{label}</span>
    </div>
  );
};

export default CardPhoto;
