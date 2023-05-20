import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./ShoppingBar.module.css";

import { ReactComponent as SearchMobIcon } from "assets/icons/search_m.svg";
import { ReactComponent as ComparisonIcon } from "assets/icons/comparison.svg";
import { ReactComponent as FavoriteIcon } from "assets/icons/favorite.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";

import { selectCart } from "redux/productsSlice";

const ShoppingBar = ({ shopUl, shopSearch }) => {
  const [btn, mobileOnly] = shopSearch;

  const cart = useSelector(selectCart);

  const isCartFilled = cart.length > 0 ? styles.filled : null;

  return (
    <ul className={shopUl}>
      <li className={mobileOnly}>
        <button className={btn}>
          <SearchMobIcon />
        </button>
      </li>
      <li>
        <Link to="/" className={styles.link}>
          <ComparisonIcon />
          <span className={styles.stats}>0</span>
        </Link>
      </li>
      <li>
        <Link to="/" className={styles.link}>
          <FavoriteIcon />
          <span className={styles.stats}>0</span>
        </Link>
      </li>
      <li>
        <Link to="/" className={styles.link}>
          <CartIcon />
          <span className={`${styles.stats} ${isCartFilled}`}>
            {cart.length}
          </span>
        </Link>
      </li>
    </ul>
  );
};

ShoppingBar.propTypes = {
  shopUl: PropTypes.string.isRequired,
  shopSearch: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ShoppingBar;
