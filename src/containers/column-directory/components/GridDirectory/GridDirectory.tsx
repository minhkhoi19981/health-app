import * as stylex from "@stylexjs/stylex";
import { useMemo } from "react";
import { Button, Card } from "~/components";
import { useDirectories } from "~/hooks";
import { gridBase } from "~/theme/tokens.stylex";
import { MAX_LENGTH_FOODS } from "~/utils";

type GridDirectoryProps = {
  filter?: string;
};

const GridDirectory: React.FC<GridDirectoryProps> = ({ filter }) => {
  const { directories, onLoadMore, loading, size } = useDirectories();

  const dataFilter = useMemo(() => {
    if (!filter) {
      return directories;
    }
    return directories.filter((food) => food.type === filter);
  }, [filter, directories]);

  return (
    <div {...stylex.props(gridBase.container)}>
      <div {...stylex.props(gridBase.grid)}>
        {dataFilter.map((directory) => (
          <Card
            key={directory.id}
            style={gridBase.item}
            image={directory.image}
            time={directory.time}
            label={directory.label}
            content={directory.content}
            tags={directory.tags}
          />
        ))}
      </div>
      {size < MAX_LENGTH_FOODS && (
        <Button onClick={onLoadMore} style={gridBase.btnLoadMore}>
          {loading ? "Loading..." : "コラムをもっと見る"}
        </Button>
      )}
    </div>
  );
};

export default GridDirectory;
