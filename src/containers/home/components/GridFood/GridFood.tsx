import { Button, CardPhoto } from "~/components";
import * as stylex from "@stylexjs/stylex";
import { MAX_LENGTH_FOODS } from "~/utils";
import { useFoods } from "~/hooks";
import { useMemo } from "react";
import { gridBase } from "~/theme/tokens.stylex";

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
    <div {...stylex.props(gridBase.container)}>
      <div {...stylex.props(gridBase.grid)}>
        {dataFilter.map((food) => (
          <CardPhoto style={gridBase.item} key={food.id} image={food.image} label={food.label} />
        ))}
      </div>
      {size < MAX_LENGTH_FOODS && (
        <Button onClick={onLoadMore} style={gridBase.btnLoadMore}>
          {loading ? "Loading..." : "記録をもっと見る"}
        </Button>
      )}
    </div>
  );
};

export default GridFood;
