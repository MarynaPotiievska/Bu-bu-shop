import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import styles from "./Head.module.css";

import { ReactComponent as ArrowIcon } from "assets/icons/arrow_above.svg";

import { selectSorting } from "redux/filters/selectors";
import { setSorting } from "redux/filters/slice";

import SortingBtns from "./SortingBtns";

const Head = ({ style, category }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("За замовчуванням");

  const sortBy = useSelector(selectSorting);

  const dispatch = useDispatch();

  const handleClick = (type) => {
    dispatch(setSorting(type));
    setOpen((prevState) => !prevState);
    setActive(type);
  };

  const isActive = (value) => (value === active ? styles.active : null);

  return (
    <section className={styles.head}>
      <div className={style}>
        <Link to="/" className={styles.link}>
          Головна &#62;
        </Link>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{category}</h2>
          <div className={styles.selector}>
            <button
              type="button"
              className={styles["selector-btn"]}
              onClick={() => setOpen((prevState) => !prevState)}
            >
              <span>{sortBy}</span>
              <ArrowIcon className={styles.icon} />
            </button>
          </div>
          <div className={styles["btns-wrapper-mob"]}>
            {open && <SortingBtns isActive={isActive} onClick={handleClick} />}
          </div>
          <div className={styles["btns-wrapper"]}>
            <SortingBtns isActive={isActive} onClick={handleClick} />
          </div>
        </div>
      </div>
    </section>
  );
};

Head.propTypes = {
  style: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Head;
