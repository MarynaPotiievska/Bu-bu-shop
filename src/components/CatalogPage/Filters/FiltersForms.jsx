import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import categories from "data/categories";
import producers from "data/brands";

import styles from "./Filters.module.css";

import { ReactComponent as ArrowAboveIcon } from "assets/icons/arrow_above.svg";
import { ReactComponent as ArrowRightIcon } from "assets/icons/arrow_white.svg";

import {
  setSubcategory,
  setAvailableOnly,
  setSaleOnly,
  setPrice,
  setProducers,
} from "redux/filters/slice";

const filterSchema = yup.object().shape({
  minPrice: yup.number().min(0).max(30000),
  maxPrice: yup.number().min(0).max(30000),
});

const initialValues = {
  minPrice: 0,
  maxPrice: 30000,
};

const FiltersForms = ({ category, onClose }) => {
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(setSubcategory(value));
  };
  const handleChangeAvailable = (e) => {
    dispatch(setAvailableOnly(e.target.checked));
  };
  const handleChangeSale = (e) => {
    dispatch(setSaleOnly(e.target.checked));
  };
  const handleSubmit = (values) => {
    dispatch(setPrice(values));
  };
  const handleChangeProducers = (e) => {
    const payload = {
      checked: e.target.checked,
      value: e.target.value,
    };
    dispatch(setProducers(payload));
  };

  const handleClickClose = () => {
    onClose(false);
  };

  return (
    <div className={styles.filters}>
      <div className={styles["filter-head"]}>
        <h3 className={styles.title}>Категорія</h3>
        <button type="button" className={styles["above-btn"]}>
          <ArrowAboveIcon />
        </button>
      </div>
      <ul className={styles.ul}>
        {categories[category].map((subcategory) => {
          return (
            <li key={subcategory}>
              <button
                type="button"
                className={styles["sub-btn"]}
                onClick={() => {
                  handleClick(subcategory);
                }}
              >
                {subcategory}
              </button>
            </li>
          );
        })}
      </ul>
      <label className={`${styles.filter} ${styles.label}`}>
        <input
          type="checkbox"
          name="available"
          className={styles.checkbox}
          onChange={handleChangeAvailable}
        />
        <div className={styles["checkbox-box"]}>
          <span className={styles["checkbox-icon"]} />
        </div>
        <span>В наявності</span>
      </label>
      <label className={`${styles.filter} ${styles.label}`}>
        <input
          type="checkbox"
          name="discount"
          className={styles.checkbox}
          onChange={handleChangeSale}
        />
        <div className={styles["checkbox-box"]}>
          <span className={styles["checkbox-icon"]} />
        </div>
        <span>Зі знижкою</span>
      </label>
      <Formik
        initialValues={initialValues}
        validationSchema={filterSchema}
        onSubmit={handleSubmit}
        className={styles.filters}
      >
        <Form>
          <label className={styles.filter}>
            <div className={styles["filter-head"]}>
              <h3 className={styles.title}>Ціна</h3>
              <button type="button" className={styles["above-btn"]}>
                <ArrowAboveIcon />
              </button>
            </div>
            <div className={styles["price-filter-wrapper"]}>
              <Field
                type="text"
                name="minPrice"
                className={styles["price-input"]}
              />
              <span>–</span>
              <Field
                type="text"
                name="maxPrice"
                className={styles["price-input"]}
              />
              <button type="submit" className={styles["price-btn"]}>
                <ArrowRightIcon className={styles["right-arrow"]} />
              </button>
            </div>
          </label>
        </Form>
      </Formik>
      <div className={`${styles.filter} ${styles["last-filter"]}`}>
        <div className={styles["filter-head"]}>
          <h3 className={styles.title}>Виробник</h3>
          <button type="button" className={styles["above-btn"]}>
            <ArrowAboveIcon />
          </button>
        </div>
        <ul className={styles.ul}>
          {producers.map((producer) => {
            return (
              <li key={producer}>
                <label className={styles.label}>
                  <input
                    type="checkbox"
                    name="producer"
                    className={styles.checkbox}
                    value={producer}
                    onChange={handleChangeProducers}
                  />
                  <div className={styles["checkbox-box"]}>
                    <span className={styles["checkbox-icon"]} />
                  </div>
                  <span>{producer}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles["submit-wrap"]}>
        <button
          type="submit"
          className={styles["submit-btn"]}
          onClick={handleClickClose}
        >
          Застосувати
        </button>
      </div>
    </div>
  );
};

FiltersForms.propTypes = {
  category: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default FiltersForms;
