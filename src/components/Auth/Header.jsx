import styles from "./Auth.module.css";

import header1x from "assets/images/auth/auth_bg_top@1x.png";
import header2x from "assets/images/auth/auth_bg_top@2x.png";

const Header = () => {
  return (
    <header>
      <img
        srcSet={`${header1x} 1x, ${header2x} 2x`}
        src={header1x}
        alt="Декоративна хвиля"
        className={`${styles.img} ${styles.waves}`}
      />
    </header>
  );
};

export default Header;
