import * as stylex from "@stylexjs/stylex";
import { styles } from "./CardPhoto.stylex";
import { Space } from "..";

type CardPhotoProps = {
  style?: stylex.StyleXStyles;
  image: string;
  label: string;
  time?: string;
};

const CardPhoto: React.FC<CardPhotoProps> = ({ style, image, label, time }) => {
  return (
    <div {...stylex.props(styles.card(image), style)}>
      <Space style={styles.label} size={12}>
        <span>{label}</span>
        {time && <span>{time}</span>}
      </Space>
    </div>
  );
};

export default CardPhoto;
