import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./FilterMarks.module.css";

import { ReactComponent as CloseIcon } from "assets/icons/close.svg";

import {
  selectSubcategory,
  selectAvailableOnly,
  selectSaleOnly,
  selectPrice,
  selectProducers,
} from "redux/filters/selectors";

import {
  setSubcategory,
  setAvailableOnly,
  setSaleOnly,
  setPrice,
  setProducers,
} from "redux/filters/slice";

const FilterMarks = () => {
  const dispatch = useDispatch();

  const subcutegory = useSelector(selectSubcategory);
  const availableOnly = useSelector(selectAvailableOnly);
  const saleOnly = useSelector(selectSaleOnly);
  const price = useSelector(selectPrice);
  const producers = useSelector(selectProducers);

  const { minPrice, maxPrice } = price;

  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);

  const handleSubcategory = () => {
    dispatch(setSubcategory(""));
  };

  const handleAvailableOnly = () => {
    dispatch(setAvailableOnly(false));
  };

  const handleSaleOnly = () => {
    dispatch(setSaleOnly(false));
  };

  const handlePriceMin = () => {
    setMin(0);
  };

  const handlePriceMax = () => {
    setMax(30000);
  };

  const handleProducers = (e) => {
    const value = e.currentTarget.children[0].childNodes[1].textContent;
    dispatch(setProducers(value));
  };

  useEffect(() => {
    dispatch(setPrice({ minPrice: min, maxPrice: max }));
  }, [min, max, dispatch]);

  return (
    <ul>
      {subcutegory !== "" && (
        <li key="subcutegory">
          <button
            type="button"
            onClick={handleSubcategory}
            className={styles.btn}
          >
            <span>{subcutegory}</span>
            <CloseIcon />
          </button>
        </li>
      )}
      {availableOnly && (
        <li key="availableOnly">
          <button
            type="button"
            onClick={handleAvailableOnly}
            className={styles.btn}
          >
            <span>В наявності</span>
            <CloseIcon />
          </button>
        </li>
      )}
      {saleOnly && (
        <li key="saleOnly">
          <button type="button" onClick={handleSaleOnly} className={styles.btn}>
            <span>Зі знижкою</span>
            <CloseIcon />
          </button>
        </li>
      )}
      {minPrice > 0 && (
        <li key="minPrice">
          <button type="button" onClick={handlePriceMin} className={styles.btn}>
            <span>Ціна: від {minPrice} грн</span>
            <CloseIcon />
          </button>
        </li>
      )}
      {maxPrice < 30000 && (
        <li key="maxPrice">
          <button type="button" onClick={handlePriceMax} className={styles.btn}>
            <span>Ціна: до {maxPrice} грн</span>
            <CloseIcon />
          </button>
        </li>
      )}
      {producers.length > 0 &&
        producers.map((producer) => (
          <li key={producer}>
            <button
              type="button"
              onClick={handleProducers}
              className={styles.btn}
            >
              <span>Виробник: {producer}</span>
              <CloseIcon />
            </button>
          </li>
        ))}
    </ul>
  );
};

export default FilterMarks;
