import { Chart } from "react-google-charts";
import { useDataChartAchievement } from "~/hooks";

type ChartAchievementProps = {};

const ChartAchievement: React.FC<ChartAchievementProps> = () => {
  const { data } = useDataChartAchievement();
  const options = {
    backgroundColor: "#2E2E2E",
    color: "white",
    hAxis: {
      title: "Time",
      textStyle: { color: "#FFF" },
    },
    vAxis: {
      textStyle: { color: "#FFF" },
    },
    series: {
      1: { curveType: "function" },
      textStyle: { color: "#FFF" },
    },
    legend: {
      textStyle: { color: "#FFF" },
    },
  };
  return <Chart chartType="LineChart" width="100%" height="100%" data={data} options={options} />;
};

export default ChartAchievement;
