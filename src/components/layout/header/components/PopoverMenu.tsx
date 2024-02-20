import * as stylex from "@stylexjs/stylex";
import { IconClose, IconMenu } from "~/assets/icons";
import { Icon, Popover } from "~/components";
import { styles } from "./PopoverMenu.stylex";
import { MENUS_POPOVER } from "../../_defaultProps";
import { useCallback, useState } from "react";
import { COLORS } from "~/theme/tokens.stylex";
import { NavLink } from "react-router-dom";

type PopoverMenuProps = {};

const PopoverContent = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div {...stylex.props(styles.boxPopover)}>
      <div {...stylex.props(styles.boxIconClose)}>
        <Icon color={COLORS.primary} onClick={onClose} style={styles.iconClose} icon={IconClose} name="close" />
      </div>
      <ul {...stylex.props(styles.popover)}>
        {MENUS_POPOVER.map((menu) => (
          <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to={menu.route} key={menu.key}>
            <div {...stylex.props(styles.boxItem)} key={menu.key}>
              <li {...stylex.props(styles.item)}>{menu.label}</li>
            </div>
          </NavLink>
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
    <Popover
      onClose={onHandleClose}
      onOpen={onHandleOpen}
      open={open}
      content={<PopoverContent onClose={onHandleClose} />}
    >
      <Icon color={COLORS.primary} icon={IconMenu} style={styles.icon} />
    </Popover>
  );
};

export default PopoverMenu;
