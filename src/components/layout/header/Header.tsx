import * as stylex from "@stylexjs/stylex";
import { Badge, Icon, Space } from "~/components";
import { IconLogo, IconLogout } from "~/assets/icons";
import { styles } from "./Header.stylex";
import { MENUS } from "../_defaultProps";
import PopoverMenu from "./components";
import { COLORS } from "~/theme/tokens.stylex";
import { NavLink, useNavigate } from "react-router-dom";
import { authStore } from "~/store";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { removeAuth } = authStore();
  const navigate = useNavigate();

  const onGoHome = () => navigate("/");

  const onHandleLogout = () => {
    removeAuth();
    navigate("/login");
  };

  return (
    <div {...stylex.props(styles.header)}>
      <div {...stylex.props(styles.box)}>
        <Icon onClick={onGoHome} color={COLORS.primary} icon={IconLogo} style={styles.logo} name="health-logo" />
        <div {...stylex.props(styles.menus)}>
          {MENUS.map((menu) => (
            <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to={menu.route} key={menu.name}>
              <Space style={styles.menuItem}>
                <Badge count={menu.notification}>
                  <Icon color={COLORS.primary} icon={menu.icon} name={menu.name} />
                </Badge>
                <span {...stylex.props(styles.labelMenu)}>{menu.label}</span>
              </Space>
            </NavLink>
          ))}
          <PopoverMenu />
          <Icon onClick={onHandleLogout} color={COLORS.primary} icon={IconLogout} name="logout" style={styles.logout} />
        </div>
      </div>
    </div>
  );
};

export default Header;
