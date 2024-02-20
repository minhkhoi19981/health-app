import * as stylex from "@stylexjs/stylex";
import { Diaries, EntryScreens, ExerciseRecord, PercentageGraph } from "./components";
import { styles } from "./MyOwnRecordView.stylex";

type MyOwnRecordViewProps = {};

const MyOwnRecordView: React.FC<MyOwnRecordViewProps> = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <EntryScreens />
      <PercentageGraph />
      <ExerciseRecord />
      <Diaries />
    </div>
  );
};

export default MyOwnRecordView;
