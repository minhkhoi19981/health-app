import * as stylex from "@stylexjs/stylex";
import { IconClose, IconMenu } from "~/assets/icons";
import { Icon, Popover } from "~/components";
import { styles } from "./PopoverMenu.stylex";
import { MENUS_POPOVER } from "../../_defaultProps";
import { useCallback, useState } from "react";

type PopoverMenuProps = {};

const PopoverContent = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div {...stylex.props(styles.boxPopover)}>
      <Icon onClick={onClose} style={styles.iconClose} icon={IconClose} name="close" />
      <ul {...stylex.props(styles.popover)}>
        {MENUS_POPOVER.map((menu) => (
          <div {...stylex.props(styles.boxItem)} key={menu.key}>
            <li {...stylex.props(styles.item)}>{menu.label}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

const PopoverMenu: React.FC<PopoverMenuProps> = () => {
  const [open, setOpen] = useState(false);

  const onHandleOpen = useCallback(() => setOpen((value) => !value), []);
  const onHandleClose = useCallback(() => setOpen(false), []);
  return (
    <Popover onOpen={onHandleOpen} open={open} content={<PopoverContent onClose={onHandleClose} />}>
      <Icon icon={IconMenu} style={styles.icon} />
    </Popover>
  );
};

export default PopoverMenu;
