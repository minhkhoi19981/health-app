import * as stylex from "@stylexjs/stylex";
import { ENTRY_SCREENS } from "../../_defaultProps";
import EntryItem from "./EntryItem";
import { styles } from "./EntryScreens.stylex";

type EntryScreensProps = {};

const EntryScreens: React.FC<EntryScreensProps> = () => {
  return (
    <div {...stylex.props(styles.container)}>
      {ENTRY_SCREENS.map((screen) => (
        <EntryItem key={screen.id} image={screen.image} title={screen.title} content={screen.content} />
      ))}
    </div>
  );
};

export default EntryScreens;
