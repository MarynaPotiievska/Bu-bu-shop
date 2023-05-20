import PropTypes from "prop-types";
import { useState } from "react";

import styles from "./Pagination.module.css";

import { ReactComponent as ArrowRightIcon } from "assets/icons/arrow_right_small.svg";

const Pagination = ({ style }) => {
  const [current, setCurrent] = useState(1);

  const pages = [1, 2, 3, 4, 5];

  const handleClick = (page) => {
    setCurrent(page);
  };

  return (
    <div className={`${style} ${styles.wrapper}`}>
      <button type="button" className={`${styles.btn} ${styles["show-more"]}`}>
        Показати ще
      </button>
      <div className={styles["page-wrapper"]}>
        <ul className={styles.ul}>
          {pages.map((page) => {
            const isActive = current === page ? styles.active : null;
            return (
              <li key={page}>
                <button
                  type="button"
                  onClick={() => handleClick(page)}
                  className={`${styles.btn} ${styles.page} ${isActive}`}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button type="button" className={`${styles.btn} ${styles.arrow}`}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  style: PropTypes.string.isRequired,
};

export default Pagination;
