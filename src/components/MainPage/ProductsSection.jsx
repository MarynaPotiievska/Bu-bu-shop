import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import styles from "./MainPage.module.css";

import Section from "./Section";
import ProductCard from "components/ProductCard";

const ProductsSection = ({
  products,
  title,
  subtitle,
  unvisible,
  container,
}) => {
  return (
    <Section
      title={title}
      subtitle={subtitle}
      unvisible={unvisible}
      container={container}
    >
      <ul className={styles.ul}>
        {products.map((product) => {
          if (!product.id) {
            product.id = nanoid();
          }
          return (
            <ProductCard
              product={product}
              path={`/catalog/${product.category}/${product.id}`}
              key={product.id}
            />
          );
        })}
      </ul>
    </Section>
  );
};

ProductsSection.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  unvisible: PropTypes.string,
  container: PropTypes.string,
};

export default ProductsSection;
