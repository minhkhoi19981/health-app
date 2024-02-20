import * as stylex from "@stylexjs/stylex";
import { styles } from "./HomeView.stylex";
import { AchievementRate, ChartAchievement, FilterButtons, GridFood } from "./components";
import { useCallback, useState } from "react";

type HomeViewProps = {};

const HomeView: React.FC<HomeViewProps> = () => {
  const [filter, setFilter] = useState("");

  const onHandleFilter = useCallback((id: string) => setFilter(id), []);

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.firstColumn)}>
        <AchievementRate />
        <ChartAchievement />
      </div>
      <div {...stylex.props(styles.filterButton)}>
        <FilterButtons onSelected={onHandleFilter} selected={filter} />
      </div>
      <div {...stylex.props(styles.gridFood)}>
        <GridFood filter={filter} />
      </div>
    </div>
  );
};

export default HomeView;
