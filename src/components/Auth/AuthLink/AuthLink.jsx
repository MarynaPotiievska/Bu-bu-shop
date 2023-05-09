import styles from "./AuthLink.module.css";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const AuthLink = ({ path, message }) => {
  return (
    <Link to={path} className={styles.link}>
      {message}
    </Link>
  );
};

AuthLink.propTypes = {
  path: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default AuthLink;
