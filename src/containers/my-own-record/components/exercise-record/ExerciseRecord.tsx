import * as stylex from "@stylexjs/stylex";
import { styles } from "./ExerciseRecord.stylex";
import { Scrollbar, Space } from "~/components";
import { useExerciseRecords } from "~/hooks";

type ExerciseRecordProps = {};

const ExerciseRecord: React.FC<ExerciseRecordProps> = () => {
  const { records } = useExerciseRecords();
  return (
    <div {...stylex.props(styles.container)}>
      <Space style={styles.paddingLeft} align="start" size={32}>
        <div {...stylex.props(styles.title)} dangerouslySetInnerHTML={{ __html: "MY<br/>EXERCISE" }} />
        <span {...stylex.props(styles.date)}>2021.05.21</span>
      </Space>
      <Scrollbar id="exerciseRecord" style={styles.scroll}>
        <ul {...stylex.props(styles.list, styles.paddingLeft)}>
          {records.map((record) => (
            <li key={record.id} {...stylex.props(styles.item)}>
              <div {...stylex.props(styles.firstRow)}>
                <Space size={2} direction="vertical" align="start">
                  <span {...stylex.props(styles.labelItem)}>{record.label}</span>
                  <span {...stylex.props(styles.kcalItem)}>{record.kcal}</span>
                </Space>
                <span {...stylex.props(styles.timeItem)}>{record.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </Scrollbar>
    </div>
  );
};

export default ExerciseRecord;
