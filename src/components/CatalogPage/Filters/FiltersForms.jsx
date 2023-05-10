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
    console.log(payload);
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
      <label className={styles.filter}>
        <input
          type="checkbox"
          name="available"
          onChange={handleChangeAvailable}
        />
        <span className={styles.label}>В наявності</span>
      </label>
      <label className={styles.filter}>
        <input type="checkbox" name="discount" onChange={handleChangeSale} />
        <span className={styles.label}>Зі знижкою</span>
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
              <Field type="text" name="minPrice" className={styles.input} />
              <span>–</span>
              <Field type="text" name="maxPrice" className={styles.input} />
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
                <label>
                  <input
                    type="checkbox"
                    name="producer"
                    value={producer}
                    onChange={handleChangeProducers}
                  />
                  <span className={styles.label}>{producer}</span>
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
