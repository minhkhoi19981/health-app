import { useMemo } from "react";

const useDataPercentageGraph = () => {
  const data = useMemo(
    () => [
      ["x", "Record", "Diary"],
      [0, 0, 0],
      [1, 10, 5],
      [2, 23, 15],
      [3, 17, 9],
      [4, 18, 10],
      [5, 9, 5],
      [6, 11, 3],
      [7, 27, 19],
    ],
    [],
  );
  return { data };
};

export default useDataPercentageGraph;
