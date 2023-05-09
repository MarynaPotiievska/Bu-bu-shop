import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./MainPage.module.css";

const ImgLink = ({ imgDeskTabX, imgDeskTabXx, brand }) => {
  return (
    <Link to="/">
      <img
        srcSet={`${imgDeskTabX} 1x, ${imgDeskTabXx} 2x`}
        src={imgDeskTabX}
        alt={`Логотип ${brand}`}
        className={styles.img}
      />
    </Link>
  );
};

ImgLink.propTypes = {
  imgDeskTabX: PropTypes.string.isRequired,
  imgDeskTabXx: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export default ImgLink;
