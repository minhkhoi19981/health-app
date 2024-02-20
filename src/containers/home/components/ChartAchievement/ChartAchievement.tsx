import { Chart } from "react-google-charts";

type ChartAchievementProps = {};

export const data = [
  ["x", "Morning", "Luch"],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
];

export const options = {
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

const ChartAchievement: React.FC<ChartAchievementProps> = () => {
  return <Chart chartType="LineChart" width="100%" height="100%" data={data} options={options} />;
};

export default ChartAchievement;
