import PropTypes from "prop-types";

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
        {products.map((product) => (
          <ProductCard
            product={product}
            path={`/catalog/${product.categoryEn}/${product.id}`}
            key={product.id}
          />
        ))}
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
