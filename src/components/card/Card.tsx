import * as stylex from "@stylexjs/stylex";
import { styles } from "./Card.styelx";
import { CardPhoto, Space, Tag } from "..";

type CardProps = {
  style?: stylex.StyleXStyles;
  image: string;
  label: string;
  content?: string;
  tags?: string[];
  time?: string;
};

const Card: React.FC<CardProps> = ({ style, image, label, content, tags, time }) => {
  return (
    <div {...stylex.props(styles.container, style)}>
      <CardPhoto time={time} image={image} label={label} style={styles.card} />
      {content && <div {...stylex.props(styles.content)}>{content}</div>}
      {tags && tags?.length && (
        <Space align="start">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Space>
      )}
    </div>
  );
};

export default Card;
