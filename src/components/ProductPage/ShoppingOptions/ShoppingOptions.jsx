import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import products from "data/products";

import styles from "./ShoppingOptions.module.css";

import { ReactComponent as FavoriteIcon } from "assets/icons/favorite_pink.svg";
import { ReactComponent as ComparisonIcon } from "assets/icons/comparison_gray.svg";
import { ReactComponent as StarIcon } from "assets/icons/star_large.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";

import { selectCart } from "redux/productsSlice";
import { addToCartProduct } from "redux/productsSlice";

const ShoppingOptions = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const params = useParams();
  const { category, productId } = params;

  const product = products.find((item) => item.id === productId);

  const [activeColor, setActiveColor] = useState(product.colors[0]);
  const [activeSex, setActiveSex] = useState(product.sex[0]);

  const priceWithDiscount = Math.ceil(
    product.price - (product.price * product.discount) / 100
  );

  const isAvailable = product.available ? styles.available : styles.disabled;

  const isCrossedPrice = product.discount
    ? styles["crossed-price"]
    : styles.price;

  const handleClickColor = (color) => {
    setActiveColor(color);
  };

  const handleClickSex = (sex) => {
    setActiveSex(sex);
  };

  const handleClickCart = () => {
    const index = cart.indexOf(product);
    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      product.quantity = 1;
      dispatch(addToCartProduct(product));
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles["links-wrapper"]}>
        <Link to="/" className={styles.link}>
          Головна &#62;
        </Link>
        <Link to={`/catalog/:${category}`} className={styles.link}>
          {product.category} &#62;
        </Link>
      </div>
      <div className={styles.head}>
        <h1 className={styles.name}>{product.name}</h1>
        <div className={styles["shopping-bar"]}>
          <button type="button" className={styles.btn}>
            <FavoriteIcon />
            <span
              className={`${styles["shoppinb-bar-btn"]} ${styles.favorite}`}
            >
              У вибране
            </span>
          </button>
          <button type="button" className={styles.btn}>
            <ComparisonIcon />
            <span
              className={`${styles["shoppinb-bar-btn"]} ${styles.comparison}`}
            >
              Порівняти
            </span>
          </button>
        </div>
      </div>
      <div className={styles["add-info"]}>
        <p className={`${styles["add-info-item"]} ${isAvailable}`}>
          {product.available ? "В наявності" : "Немає в наявності"}
        </p>
        <p className={`${styles["add-info-item"]} ${styles.code}`}>
          Код: EP-01
        </p>
        <div className={styles["rating-wrapper"]}>
          <span className={styles.rating}>{product.rating}</span>
          <StarIcon />
          <span className={styles.comments}>(9)</span>
        </div>
      </div>
      {/* slider */}
      <div>
        <p className={styles.option}>Колір:</p>
        <ul className={styles.ul}>
          {product.colors.map((color) => {
            const style = (color) => {
              switch (color) {
                case "сірий":
                  return `${styles.gray}`;
                case "червоний":
                  return `${styles.red}`;
                case "зелений":
                  return `${styles.green}`;
                default:
                  break;
              }
            };
            const isActiveColor = color === activeColor ? styles.active : null;
            return (
              <li key={color} className={styles.li}>
                <button
                  type="button"
                  className={`${styles.btn} ${styles["color-box"]} ${isActiveColor}`}
                  onClick={() => handleClickColor(color)}
                >
                  <span className={`${styles.color} ${style(color)}`}></span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p className={`${styles.option} ${styles["option-sex"]}`}>Стать:</p>
        <ul className={styles.ul}>
          {product.sex.map((sex) => {
            const isActiveSex = sex === activeSex ? styles["active-sex"] : null;
            return (
              <li key={sex}>
                <button
                  type="button"
                  className={`${styles.btn} ${styles["sex-btn"]} ${isActiveSex}`}
                  onClick={() => handleClickSex(sex)}
                >
                  {sex}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles["price-wrapper"]}>
        <span className={isCrossedPrice}>{product.price} грн</span>
        {product.discount && (
          <>
            <span className={`${styles.price} ${styles["discount-price"]}`}>
              {priceWithDiscount} грн
            </span>
            <span className={styles.discount}>-{product.discount}%</span>
          </>
        )}
      </div>
      <div className={styles["shopping-btns"]}>
        <button
          type="button"
          className={`${styles.btn} ${styles["cart-btn"]}`}
          onClick={handleClickCart}
        >
          <CartIcon />
          <span>Купити</span>
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles["buy-btn"]}`}
          onClick={handleClickCart}
        >
          <span>Купити в 1 клік</span>
        </button>
      </div>
    </section>
  );
};

export default ShoppingOptions;
