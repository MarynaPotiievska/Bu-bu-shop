import styles from "./AlterAuth.module.css";

import { Link } from "react-router-dom";

import { ReactComponent as GoogleIcon } from "assets/icons/google_auth.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook_auth.svg";

const AlterAuth = () => {
  return (
    <div className={styles.container}>
      <p className={`${styles.text} ${styles.divider}`}>Або</p>
      <div className={styles["links-wrapper"]}>
        <p className={styles.text}>Увійти за допомогою:</p>
        <ul className={styles.ul}>
          <li>
            <Link to="/signin">
              <GoogleIcon />
            </Link>
          </li>
          <li>
            <Link to="/signin">
              <FacebookIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AlterAuth;
