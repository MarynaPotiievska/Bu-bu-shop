import styles from "./SearchForm.module.css";

import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

const SearchForm = () => {
  return (
    <form className={styles.form}>
      <input placeholder="Я шукаю..." className={styles.input}></input>
      <SearchIcon className={styles.icon} />
    </form>
  );
};

export default SearchForm;
