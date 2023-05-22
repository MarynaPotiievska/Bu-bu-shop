import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ navBar, navUl, navLink, navHidden, navLi }) => {
  return (
    <nav className={navBar}>
      <ul className={navUl}>
        <li className={navLi}>
          <Link to="/" className={navLink}>
            Про нас
          </Link>
        </li>
        <li className={navLi}>
          <Link to="/" className={navLink}>
            Контакти
          </Link>
        </li>
        <li className={navLi}>
          <Link to="/" className={navLink}>
            Доставка і оплата
          </Link>
        </li>
        <li className={navLi}>
          <Link to="/" className={navLink}>
            Повернення і обмін
          </Link>
        </li>
        <li className={navLi}>
          <Link to="/" className={`${navLink} ${navHidden}`}>
            Політика конфіденційності
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  navBar: PropTypes.string,
  navUl: PropTypes.string,
  navLink: PropTypes.string,
  navHidden: PropTypes.string,
  navLi: PropTypes.string,
};

export default NavBar;
