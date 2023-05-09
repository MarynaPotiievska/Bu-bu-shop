import { Link } from "react-router-dom";

import styles from "./LogoLink.module.css";

import logoMobile1x from "assets/images/logo/logo@1x_m.png";
import logoMobile2x from "assets/images/logo/logo@2x_m.png";
import logoDeskAndTab1x from "assets/images/logo/logo@1x_dt.png";
import logoDeskAndTab2x from "assets/images/logo/logo@2x_dt.png";

const LogoLink = ({ className }) => {
  return (
    <Link to="/" className={className}>
      <picture>
        <source
          media="(min-width: 481px)"
          srcSet={`${logoDeskAndTab1x} 1x, ${logoDeskAndTab2x} 2x`}
          type="image/png"
        />
        <source
          media="(max-width: 480px)"
          srcSet={`${logoMobile1x} 1x, ${logoMobile2x} 2x`}
          type="image/png"
        />
        <img
          src={logoMobile1x}
          alt="Логотип магазину Bu-bu"
          className={styles.img}
        />
      </picture>
    </Link>
  );
};

export default LogoLink;
