import * as stylex from "@stylexjs/stylex";
import { styles } from "./HomeView.stylex";
import { AchievementRate, FilterButtons, GridFood } from "./components";

type HomeViewProps = {};

const HomeView: React.FC<HomeViewProps> = () => {
  return (
    <div>
      <div {...stylex.props(styles.firstColumn)}>
        <AchievementRate />
      </div>
      <div {...stylex.props(styles.filterButton)}>
        <FilterButtons />
      </div>
      <GridFood />
    </div>
  );
};

export default HomeView;
