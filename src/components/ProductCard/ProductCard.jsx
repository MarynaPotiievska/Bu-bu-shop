import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./ProductCard.module.css";

const ProductCard = ({ product, path }) => {
  const priceWithDiscount = Math.ceil(
    product.price - (product.price * product.discount) / 100
  );

  const isDiscountLable =
    product.discount > 0 ? styles.discount : styles.unvisible;
  const isDiscountPrice =
    product.discount > 0 ? styles["price-with-discount"] : styles.unvisible;

  const simplePrice =
    product.discount > 0 ? styles["crossed-price"] : styles["simple-price"];

  return (
    <li className={styles.li}>
      <Link to={path} className={styles.link}>
        <div className={styles.container}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${product.mainImage.deskTab[0]} 1x, ${product.mainImage.deskTab[1]} 2x`}
              type="image/png"
            />
            <source
              media="(max-width: 767px)"
              srcSet={`${product.mainImage?.mob[0]} 1x, ${product.mainImage?.mob[1]} 2x`}
              type="image/png"
            />
            <img
              src={product.mainImage.mob[0]}
              alt={product.name}
              className={styles.img}
            />
          </picture>
          <span className={isDiscountLable}>-{product.discount}%</span>
        </div>
        <div className={styles.container}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={simplePrice}>{product.price} грн</p>
          <span className={isDiscountPrice}>{priceWithDiscount} грн</span>
        </div>
      </Link>
    </li>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    mainImgUrl: PropTypes.string,
    discount: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export default ProductCard;
