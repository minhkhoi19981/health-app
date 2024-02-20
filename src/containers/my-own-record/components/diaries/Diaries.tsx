import * as stylex from "@stylexjs/stylex";
import { Button } from "~/components";
import { useMyDiaries } from "~/hooks";
import { gridBase } from "~/theme/tokens.stylex";
import { MAX_LENGTH_FOODS } from "~/utils";
import DiaRyItem from "./DiaryItem";
import { styles } from "./Diaries.stylex";

type DiariesProps = {};

const Diaries: React.FC<DiariesProps> = () => {
  const { diaries, onLoadMore, loading, size } = useMyDiaries();

  return (
    <div {...stylex.props(gridBase.container)}>
      <div {...stylex.props(styles.left)}>
        <span {...stylex.props(styles.title)}>MY DIARY</span>
      </div>
      <div {...stylex.props(gridBase.grid)}>
        {diaries.map((diary, index) => (
          <DiaRyItem {...diary} key={index} />
        ))}
      </div>
      {size < MAX_LENGTH_FOODS && (
        <Button onClick={onLoadMore} style={gridBase.btnLoadMore}>
          {loading ? "Loading..." : "自分の日記をもっと見る"}
        </Button>
      )}
    </div>
  );
};

export default Diaries;
