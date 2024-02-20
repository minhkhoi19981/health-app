import * as stylex from "@stylexjs/stylex";
import { Icon, Space } from "~/components";
import { FILTERS } from "../../_defaultProps";
import { styles } from "./FilterButtons.stylex";
import { IconKnife } from "~/assets/icons";

type FilterButtonsProps = {
  onSelected: (id: string) => void;
  selected?: string;
};

const FilterButtons: React.FC<FilterButtonsProps> = ({ onSelected, selected }) => {
  const onHandleSelected = (id: string) => {
    if (selected === id) {
      onSelected("");
    } else {
      onSelected(id);
    }
  };
  return (
    <div {...stylex.props(styles.filters)}>
      {FILTERS.map((filter) => {
        return (
          <div
            onClick={() => onHandleSelected(filter.id)}
            key={filter.id}
            {...stylex.props(styles.button, selected === filter.id && styles.active)}
          >
            <Space direction="vertical" size={2}>
              <Icon icon={IconKnife} style={styles.icon} />
              <span>{filter.label}</span>
            </Space>
          </div>
        );
      })}
    </div>
  );
};

export default FilterButtons;
