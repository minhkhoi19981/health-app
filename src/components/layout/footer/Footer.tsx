import * as stylex from "@stylexjs/stylex";
import { styles } from "./Footer.stylex";
import { MENUS_FOOTER } from "../_defaultProps";
import { NavLink } from "react-router-dom";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div {...stylex.props(styles.footer)}>
      <ul {...stylex.props(styles.box)}>
        {MENUS_FOOTER.map((menu) => (
          <NavLink className={({ isActive }) => (isActive ? "isActive" : "")} to={menu.route} key={menu.key}>
            <li {...stylex.props(styles.menu)}>{menu.label}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
