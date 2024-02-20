const useExerciseRecords = () => {
  const records = Array.from(Array(16).keys()).map((item) => ({
    label: "家事全般（立位・軽い",
    kcal: "26kcal",
    time: `${20 - item} min`,
    id: item + 1,
  }));
  return { records };
};

export default useExerciseRecords;
