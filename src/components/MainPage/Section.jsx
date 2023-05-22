import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./MainPage.module.css";

import { ReactComponent as ArrowRightIcon } from "assets/icons/arrow_right.svg";

const Section = ({ title, subtitle, unvisible, container, children }) => {
  return (
    <section>
      <div className={`${styles.container} ${container}`}>
        <div className={styles.header}>
          <div className={styles["titles-wrapper"]}>
            <h2 className={styles.title}>{title}</h2>
            <span className={`${styles.subtitle} ${unvisible}`}>
              {subtitle}
            </span>
          </div>
          <Link>
            <ArrowRightIcon />
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  unvisible: PropTypes.string,
  container: PropTypes.string,
};

export default Section;
