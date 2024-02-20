import { IMAGES_DINNER, IMAGES_LUNCH, IMAGES_MORNING } from "~/containers/home/_defaultProps";
import { v4 as uuidv4 } from "uuid";
import { Snack01 } from "~/assets/images";
import {
  RECOMMEND_BEAUTIES,
  RECOMMEND_COLUMNS,
  RECOMMEND_DIETS,
  RECOMMEND_HEALTHS,
} from "~/containers/about-health/_defaultProps";

export const genDataFood = () => {
  let result: FoodItem[] = [];
  Array.from(Array(4).keys()).forEach((item) => {
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
    result.push(...fake);
  });
  return result;
};

export const genDataDirectories = () => {
  let result: Directory[] = [];
  Array.from(Array(4).keys()).forEach((item) => {
    const fake: Directory[] = [
      {
        image: RECOMMEND_COLUMNS[Math.floor(Math.random() * 2)],
        label: `2021.05.${17 - item}`,
        time: "23:25",
        type: "column",
        id: uuidv4(),
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に",
        tags: ["#魚料理", "#和食", "#DHA"],
      },
      {
        image: RECOMMEND_DIETS[Math.floor(Math.random() * 2)],
        label: `2021.05.${17 - item}`,
        type: "diet",
        time: "23:25",
        id: uuidv4(),
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に",
        tags: ["#魚料理", "#和食", "#DHA"],
      },
      {
        image: RECOMMEND_BEAUTIES[Math.floor(Math.random() * 2)],
        label: `2021.05.${17 - item}`,
        type: "beauty",
        time: "23:25",
        id: uuidv4(),
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に",
        tags: ["#魚料理", "#和食", "#DHA"],
      },
      {
        image: RECOMMEND_HEALTHS[Math.floor(Math.random() * 2)],
        label: `2021.05.${17 - item}`,
        type: "health",
        time: "23:25",
        id: uuidv4(),
        content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に",
        tags: ["#魚料理", "#和食", "#DHA"],
      },
    ];
    result.push(...fake);
  });
  return result;
};

export const genMyDiaries = () => {
  const result: Diary[] = Array.from(Array(16).keys()).map((item) => ({
    date: `2021.05.${21 - item}`,
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。 <br/>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  }));

  return result;
};

export const MAX_LENGTH_FOODS = 16;
