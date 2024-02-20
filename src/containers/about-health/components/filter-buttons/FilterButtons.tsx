import * as stylex from "@stylexjs/stylex";
import { gridBase } from "~/theme/tokens.stylex";
import { FILTERS } from "../../_defaultProps";
import { styles } from "./FilterButtons.stylex";

type FilterButtonsProps = {
  onSelected: (id: string) => void;
  selected?: string;
};

const Item = ({
  label,
  describe,
  style,
  onSelected,
}: {
  style?: stylex.StyleXStyles;
  label: string;
  describe: string;
  onSelected: () => void;
}) => {
  return (
    <div {...stylex.props(styles.box, style)} onClick={onSelected}>
      <div {...stylex.props(styles.label)} dangerouslySetInnerHTML={{ __html: label }} />
      <div {...stylex.props(styles.divider)} />
      <span {...stylex.props(styles.describe)}>{describe}</span>
    </div>
  );
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
    <div {...stylex.props(gridBase.container)}>
      <div {...stylex.props(gridBase.grid, styles.gap)}>
        {FILTERS.map((filter) => (
          <Item
            style={selected === filter.id && styles.active}
            onSelected={() => onHandleSelected(filter.id)}
            label={filter.label}
            describe={filter.describe}
            key={filter.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
