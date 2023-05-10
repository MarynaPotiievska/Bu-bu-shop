import PropTypes from "prop-types";
import { useState } from "react";

import styles from "./Filters.module.css";

import { ReactComponent as FilterIcon } from "assets/icons/filter.svg";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";

import FiltersForms from "./FiltersForms";

const Filters = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className={styles["filters-marks"]}>
        <button
          type="button"
          className={styles["open-filter-btn"]}
          onClick={handleClick}
        >
          <FilterIcon />
          <span>Фільтр</span>
        </button>
      </div>
      {isOpen && (
        <div className={styles["filters-modal"]}>
          <FiltersForms category={category} onClose={setIsOpen} />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className={styles["close-btn"]}
          >
            <CloseIcon />
          </button>
        </div>
      )}
      <div className={styles["filters-desk"]}>
        <FiltersForms category={category} />
      </div>
    </div>
  );
};

Filters.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Filters;
