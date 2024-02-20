import * as stylex from "@stylexjs/stylex";
import { Badge, Icon, Space } from "~/components";
import { IconLogo } from "~/assets/icons";
import { styles } from "./Header.stylex";
import { MENUS } from "../_defaultProps";
import PopoverMenu from "./components";
import { COLORS } from "~/theme/tokens.stylex";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div {...stylex.props(styles.header)}>
      <div {...stylex.props(styles.box)}>
        <Icon color={COLORS.primary} icon={IconLogo} style={styles.logo} name="health-logo" />
        <div {...stylex.props(styles.menus)}>
          {MENUS.map((menu) => (
            <Space style={styles.menuItem} key={menu.name}>
              <Badge count={menu.notification}>
                <Icon color={COLORS.primary} icon={menu.icon} name={menu.name} />
              </Badge>
              <span {...stylex.props(styles.labelMenu)}>{menu.label}</span>
            </Space>
          ))}
          <PopoverMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
