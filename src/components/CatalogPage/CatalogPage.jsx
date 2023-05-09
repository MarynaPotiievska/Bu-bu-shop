import { useParams } from "react-router-dom";

import products from "data/products.json";

import styles from "./CatalogPage.module.css";

import ProductsList from "./ProductsList/ProductsList";
import Head from "./Head/Head";

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
      <section className={styles.container}>
        <ProductsList products={categoryProducts} />
      </section>
    </>
  );
};

export default CatalogPage;
