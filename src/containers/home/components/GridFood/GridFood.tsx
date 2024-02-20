import { Button, CardPhoto } from "~/components";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./GridFood.stylex";
import { MAX_LENGTH_FOODS } from "~/utils";
import { useFoods } from "~/hooks";
import { useMemo } from "react";

type GridFoodProps = {
  filter?: string;
};

const GridFood: React.FC<GridFoodProps> = ({ filter }) => {
  const { foods, onLoadMore, loading, size } = useFoods();

  const dataFilter = useMemo(() => {
    if (!filter) {
      return foods;
    }
    return foods.filter((food) => food.type === filter);
  }, [filter, foods]);

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.grid)}>
        {dataFilter.map((food) => (
          <CardPhoto style={styles.item} key={food.id} image={food.image} label={food.label} />
        ))}
      </div>
      {size < MAX_LENGTH_FOODS && (
        <Button onClick={onLoadMore} style={styles.btnLoadMore}>
          {loading ? "Loading..." : "記録をもっと見る"}
        </Button>
      )}
    </div>
  );
};

export default GridFood;
