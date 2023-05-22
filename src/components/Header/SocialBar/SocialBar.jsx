import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as UserIcon } from "assets/icons/user.svg";

import { selectIsLoggedIn } from "redux/auth/slice";

import SocialLinks from "components/SocialLinks";

const SocialBar = ({
  socBar,
  socPhone,
  socUl,
  socText,
  socBtn,
  socIcon,
  socActive,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={socBar}>
      <div className={socBar}>
        <a href="tel:0631284609" className={socPhone}>
          (063) 128-46-09
        </a>
        <SocialLinks style={socUl} />
      </div>
      <div>
        <NavLink to="/" className={`${socText} ${socActive}`}>
          Укр
        </NavLink>
        <NavLink to="/" className={socText}>
          Рус
        </NavLink>
      </div>
      <Link to="/signin" className={socBtn}>
        <UserIcon className={socIcon} />
        <span className={socText}>{isLoggedIn ? "Кабінет" : "Вхід"}</span>
      </Link>
    </div>
  );
};

SocialBar.propTypes = {
  socBar: PropTypes.string.isRequired,
  socPhone: PropTypes.string.isRequired,
  socUl: PropTypes.string.isRequired,
  socText: PropTypes.string.isRequired,
  socBtn: PropTypes.string.isRequired,
  socIcon: PropTypes.string.isRequired,
  socActive: PropTypes.string.isRequired,
};

export default SocialBar;
