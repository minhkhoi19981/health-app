import * as stylex from "@stylexjs/stylex";
import { styles } from "./EntryItem.stylex";
import { Space } from "~/components";
type EntryItemProps = {
  image: string;
  title: string;
  content: string;
  style?: stylex.StyleXStyles;
};

const EntryItem: React.FC<EntryItemProps> = ({ image, title, content, style }) => {
  return (
    <div {...stylex.props(styles.item, style)}>
      <img src={image} alt={title} {...stylex.props(styles.image)} />
      <div {...stylex.props(styles.background)} />
      <Space direction="vertical" style={styles.box}>
        <span {...stylex.props(styles.title)}>{title}</span>
        <span {...stylex.props(styles.content)}>{content}</span>
      </Space>
    </div>
  );
};

export default EntryItem;
