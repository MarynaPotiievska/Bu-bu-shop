import { useParams } from "react-router-dom";

import products from "data/products.json";

import styles from "./CatalogPage.module.css";

import Head from "./Head";
import Filters from "./Filters";
import ProductsList from "./ProductsList";

const CatalogPage = () => {
  const params = useParams();
  const category = params.category;

  const categoryProducts = products.filter(
    (product) => product.categoryEn === category
  );

  const categoryUa = categoryProducts[0].category;

  return (
    <>
      <Head style={styles.container} category={categoryUa} />
      <section className={`${styles.container} ${styles.wrapper}`}>
        <Filters category={category} />
        <ProductsList products={categoryProducts} />
      </section>
    </>
  );
};

export default CatalogPage;
