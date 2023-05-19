import { nanoid } from "nanoid";

import styles from "./ProductsList.module.css";

import ProductCard from "components/ProductCard";

const ProductsList = ({ products }) => {
  return (
    <ul className={styles.ul}>
      {products.map((product) => {
        if (!product.id) {
          product.id = nanoid();
        }
        return (
          <ProductCard product={product} path={product.id} key={product.id} />
        );
      })}
    </ul>
  );
};

export default ProductsList;
