import { useCallback, useEffect, useState } from "react";
import { genMyDiaries } from "~/utils";

const useMyDiaries = () => {
  const dataDiaries = genMyDiaries();
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [size, setSize] = useState(8);

  useEffect(() => {
    setDiaries(dataDiaries.splice(0, size));
  }, [size]);

  const onLoadMore = useCallback(async () => {
    try {
      setLoading(true);
      await new Promise((resolve) =>
        setTimeout(() => {
          setSize((value) => value + 4);
          setLoading(false);
          return resolve;
        }, 1000),
      );
    } catch (error) {}
  }, [diaries]);

  return { diaries, onLoadMore, loading, size };
};

export default useMyDiaries;
