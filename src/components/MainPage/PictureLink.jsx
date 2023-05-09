import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./MainPage.module.css";

const PictureLink = ({
  imgMobX,
  imgMobXx,
  imgDeskTabX,
  imgDeskTabXx,
  brand,
}) => {
  return (
    <Link to="/">
      <picture>
        <source
          media="(min-width: 481px)"
          srcSet={`${imgDeskTabX} 1x, ${imgDeskTabXx} 2x`}
          type="image/png"
        />
        <source
          media="(max-width: 480px)"
          srcSet={`${imgMobX} 1x, ${imgMobXx} 2x`}
          type="image/png"
        />
        <img src={imgMobX} alt={`Логотип ${brand}`} className={styles.img} />
      </picture>
    </Link>
  );
};

PictureLink.propTypes = {
  imgMobX: PropTypes.string.isRequired,
  imgMobXx: PropTypes.string.isRequired,
  imgDeskTabX: PropTypes.string.isRequired,
  imgDeskTabXx: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export default PictureLink;
