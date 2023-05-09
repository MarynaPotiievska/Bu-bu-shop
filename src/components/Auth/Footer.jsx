import styles from "./Auth.module.css";

import footer1x from "assets/images/auth/auth_bg_bottom@1x.png";
import footer2x from "assets/images/auth/auth_bg_bottom@2x.png";

const Footer = () => {
  return (
    <footer>
      <img
        srcSet={`${footer1x} 1x, ${footer2x} 2x`}
        src={footer1x}
        alt="Декоративна хвиля"
        className={`${styles.img} ${styles.waves}`}
      />
    </footer>
  );
};

export default Footer;
