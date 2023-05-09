import { NavLink, Link } from "react-router-dom";

import { ReactComponent as UserIcon } from "assets/icons/user.svg";

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
        <span className={socText}>Вхід</span>
      </Link>
    </div>
  );
};

export default SocialBar;
