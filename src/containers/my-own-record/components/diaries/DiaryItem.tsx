import * as stylex from "@stylexjs/stylex";
import { itemStyles } from "./Diaries.stylex";
import { Space } from "~/components";

type DiaRyItemProps = Diary;

const DiaRyItem: React.FC<DiaRyItemProps> = ({ date, time, content }) => {
  return (
    <div {...stylex.props(itemStyles.box)}>
      <Space direction="vertical" align="start" size={0}>
        <span {...stylex.props(itemStyles.text)}>{date}</span>
        <span {...stylex.props(itemStyles.text)}>{time}</span>
      </Space>
      <div {...stylex.props(itemStyles.content)} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default DiaRyItem;
