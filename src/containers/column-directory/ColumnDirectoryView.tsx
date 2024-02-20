import * as stylex from "@stylexjs/stylex";
import { styles } from "./ColumnDirectory.stylex";
import { FilterButtons, GridDirectory } from "./components";
import { useCallback, useState } from "react";

type ColumnDirectoryViewProps = {};

const ColumnDirectoryView: React.FC<ColumnDirectoryViewProps> = () => {
  const [filter, setFilter] = useState("");

  const onHandleFilter = useCallback((id: string) => setFilter(id), []);

  return (
    <div {...stylex.props(styles.container)}>
      <FilterButtons onSelected={onHandleFilter} selected={filter} />
      <GridDirectory filter={filter} />
    </div>
  );
};

export default ColumnDirectoryView;
