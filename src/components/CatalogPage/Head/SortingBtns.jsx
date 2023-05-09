import PropTypes from "prop-types";

import styles from "./Head.module.css";

const SortingBtns = ({ onClick, isActive }) => {
  return (
    <>
      <button
        type="button"
        className={`${styles["selector-btn"]} ${isActive("За замовчуванням")}`}
        onClick={() => onClick("За замовчуванням")}
      >
        За замовчуванням
      </button>
      <button
        type="button"
        className={`${styles["selector-btn"]} ${isActive("По популярності")}`}
        onClick={() => onClick("По популярності")}
      >
        По популярності
      </button>
      <button
        type="button"
        className={`${styles["selector-btn"]} ${isActive("Дешевші")}`}
        onClick={() => onClick("Дешевші")}
      >
        Дешевші
      </button>
      <button
        type="button"
        className={`${styles["selector-btn"]} ${isActive("Дорожчі")}`}
        onClick={() => onClick("Дорожчі")}
      >
        Дорожчі
      </button>
    </>
  );
};

SortingBtns.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired,
};

export default SortingBtns;
