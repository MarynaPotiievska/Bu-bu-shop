import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./CatalogPage.module.css";

import { selectSorting } from "redux/filters/selectors";

import hooks from "hooks";

import Head from "./Head";
import Filters from "./Filters";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";

const CatalogPage = () => {
  const params = useParams();
  const category = params.category;

  const [stateProducts, setStateProducts] = useState([]);
  const [stateCategory, setStateCategory] = useState(category);
  const [stateCategoryUa, setStateCategoryUa] = useState("");
  const [stateProducers, setStateProducers] = useState([]);

  const sortBy = useSelector(selectSorting);
  const { subcategory, availableOnly, saleOnly, price, producers } =
    hooks.useSelectFilters();

  useEffect(() => {
    const { categoryProducts, categoryProducers, filteredByProducers } =
      hooks.useFilters(
        category,
        subcategory,
        saleOnly,
        availableOnly,
        price,
        producers
      );
    const products = hooks.useSort(filteredByProducers, sortBy);
    setStateCategory(category);
    setStateCategoryUa(categoryProducts[0].category);
    setStateProducers(categoryProducers);
    setStateProducts(products);
  }, [
    category,
    subcategory,
    saleOnly,
    availableOnly,
    price,
    producers,
    sortBy,
  ]);

  return (
    <>
      <Head style={styles.container} category={stateCategoryUa} />
      <section className={`${styles.container} ${styles.wrapper}`}>
        <Filters category={stateCategory} producers={stateProducers} />
        <ProductsList products={stateProducts} />
      </section>
      <Pagination style={styles.container} />
    </>
  );
};

export default CatalogPage;
