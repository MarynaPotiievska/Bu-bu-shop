import PropTypes from "prop-types";

import styles from "./ErrorMessage.module.css";

const Error = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
