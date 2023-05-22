import PropTypes from "prop-types";

import styles from "./ProductsList.module.css";

import ProductCard from "components/ProductCard";

const ProductsList = ({ products }) => {
  return (
    <ul className={styles.ul}>
      {products.map((product) => (
        <ProductCard product={product} path={product.id} key={product.id} />
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsList;
