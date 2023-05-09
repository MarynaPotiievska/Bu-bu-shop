import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

import styles from "./ProductsList.module.css";

import ProductCard from "components/ProductCard";

import { selectSorting } from "redux/filters/selectors";

const ProductsList = ({ products }) => {
  const sortBy = useSelector(selectSorting);

  const [stateProducts, setStateProducts] = useState(products);

  useEffect(() => {
    setStateProducts((prevStateProducts) => {
      switch (sortBy) {
        case "По популярності":
          return prevStateProducts.sort(
            (firstProduct, secondProduct) =>
              secondProduct.rating - firstProduct.rating
          );
        case "Дешевші":
          return prevStateProducts.sort(
            (firstProduct, secondProduct) =>
              firstProduct.price - secondProduct.price
          );
        case "Дорожчі":
          return prevStateProducts.sort(
            (firstProduct, secondProduct) =>
              secondProduct.price - firstProduct.price
          );
        default:
          return prevStateProducts;
      }
    });
  }, [sortBy]);

  return (
    <ul className={styles.ul}>
      {stateProducts.map((product) => {
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
