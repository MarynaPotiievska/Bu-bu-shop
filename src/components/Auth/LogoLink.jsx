import styles from "./Auth.module.css";

import { Link } from "react-router-dom";

import logo1x from "assets/images/logo/logo_pink@1x.png";
import logo2x from "assets/images/logo/logo_pink@2x.png";

const LogoLink = () => {
  return (
    <Link to="/">
      <img
        srcSet={`${logo1x} 1x, ${logo2x} 2x`}
        src={logo1x}
        alt="Логотип магазину Bu-bu"
        className={styles.img}
      />
    </Link>
  );
};

export default LogoLink;
