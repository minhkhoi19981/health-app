import { useCallback, useEffect, useState } from "react";
import { genDataFood } from "~/utils";

const useFoods = () => {
  const dataFoods = genDataFood();
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [size, setSize] = useState(8);

  useEffect(() => {
    setFoods(dataFoods.splice(0, size));
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
  }, [foods]);

  return { foods, onLoadMore, loading, size };
};

export default useFoods;
