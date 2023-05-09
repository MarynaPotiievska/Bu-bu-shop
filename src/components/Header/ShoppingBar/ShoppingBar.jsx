import { Link } from "react-router-dom";

import { ReactComponent as SearchMobIcon } from "assets/icons/search_m.svg";
import { ReactComponent as ComparisonIcon } from "assets/icons/comparison.svg";
import { ReactComponent as FavoriteIcon } from "assets/icons/favorite.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";

const ShoppingBar = ({ shopUl, shopLink, shopSearch, shopStats }) => {
  const [btn, mobileOnly] = shopSearch;
  return (
    <ul className={shopUl}>
      <li className={mobileOnly}>
        <button className={btn}>
          <SearchMobIcon />
        </button>
      </li>
      <li>
        <Link to="/" className={shopLink}>
          <ComparisonIcon />
          <span className={shopStats}>0</span>
        </Link>
      </li>
      <li>
        <Link to="/" className={shopLink}>
          <FavoriteIcon />
          <span className={shopStats}>0</span>
        </Link>
      </li>
      <li>
        <Link to="/" className={shopLink}>
          <CartIcon />
          <span className={shopStats}>0</span>
        </Link>
      </li>
    </ul>
  );
};

export default ShoppingBar;
