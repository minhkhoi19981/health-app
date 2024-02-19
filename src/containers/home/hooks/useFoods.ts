import { useEffect, useState } from "react";
import { IMAGES_DINNER, IMAGES_LUNCH, IMAGES_MORNING } from "../_defaultProps";
import { v4 as uuidv4 } from "uuid";
import { Snack01 } from "~/assets/images";

type FoodItem = {
  image: string;
  label: string;
  type: "morning" | "lunch" | "dinner" | "snack";
  id: string;
};

const useFoods = () => {
  const [foods, setFoods] = useState<FoodItem[]>([]);

  useEffect(() => {
    let genData: FoodItem[] = [];
    Array.from(Array(2).keys()).forEach((item) => {
      const fake: FoodItem[] = [
        {
          image: IMAGES_MORNING[Math.floor(Math.random() * 3)],
          label: `05.${20 - item}.Morning`,
          type: "morning",
          id: uuidv4(),
        },
        {
          image: IMAGES_LUNCH[Math.floor(Math.random() * 3)],
          label: `05.${20 - item}.Lunch`,
          type: "lunch",
          id: uuidv4(),
        },
        {
          image: IMAGES_DINNER[Math.floor(Math.random() * 2)],
          label: `05.${20 - item}.Dinner`,
          type: "dinner",
          id: uuidv4(),
        },
        {
          image: Snack01,
          label: `05.${20 - item}.Snack`,
          type: "snack",
          id: uuidv4(),
        },
      ];
      genData.push(...fake);
    });

    setFoods(genData);
  }, []);

  return { foods };
};

export default useFoods;
