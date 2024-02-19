import * as stylex from "@stylexjs/stylex";
import { styles } from "./Footer.stylex";
import { MENUS_FOOTER } from "../_defaultProps";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div {...stylex.props(styles.footer)}>
      <ul {...stylex.props(styles.box)}>
        {MENUS_FOOTER.map((menu) => (
          <li {...stylex.props(styles.menu)} key={menu.key}>
            {menu.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
