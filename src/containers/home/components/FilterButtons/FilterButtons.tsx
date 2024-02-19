import * as stylex from "@stylexjs/stylex";
import { Icon, Space } from "~/components";
import { FILTERS } from "../../_defaultProps";
import { styles } from "./FilterButtons.stylex";
import { IconKnife } from "~/assets/icons";

type FilterButtonsProps = {};

const FilterButtons: React.FC<FilterButtonsProps> = () => {
  return (
    <div {...stylex.props(styles.filters)}>
      {FILTERS.map((filter) => {
        return (
          <div key={filter.id} {...stylex.props(styles.button)}>
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
