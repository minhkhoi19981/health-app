import Chart from "react-google-charts";
import * as stylex from "@stylexjs/stylex";

import { useDataPercentageGraph } from "~/hooks";
import { styles } from "./PercentageGraph.stylex";
import { COLORS } from "~/theme/tokens.stylex";
import { Space } from "~/components";

type PercentageGraphProps = {};

const PercentageGraph: React.FC<PercentageGraphProps> = () => {
  const { data } = useDataPercentageGraph();
  const options = {
    backgroundColor: "#2E2E2E",
    hAxis: {
      title: "Time",
      textStyle: { color: "#FFF" },
    },
    colors: [COLORS.primary, COLORS.secondary300],

    vAxis: {
      textStyle: { color: "#FFF" },
    },
    series: {
      1: { curveType: "function" },
      textStyle: { color: "#FFF" },
    },
    legend: {
      textStyle: { color: "#FFF" },
      show: false,
    },
  };
  return (
    <div {...stylex.props(styles.container)}>
      <Space style={styles.paddingLeft} align="start" size={32}>
        <div {...stylex.props(styles.title)} dangerouslySetInnerHTML={{ __html: "BODY<br/>RECORD" }} />
        <span {...stylex.props(styles.date)}>2021.05.21</span>
      </Space>
      <Chart chartType="LineChart" width="100%" height="100%" data={data} options={options} />
      <Space style={styles.paddingLeft} align="start" size={16}>
        {["日", "週", "月", "年"].map((item) => (
          <div {...stylex.props(styles.button)} key={item}>
            {item}
          </div>
        ))}
      </Space>
    </div>
  );
};

export default PercentageGraph;
