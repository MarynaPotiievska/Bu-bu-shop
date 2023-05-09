import styles from "./Footer.module.css";

import NavBar from "components/NavBar";
import Catalog from "components/Catalog";

import SubscribeForm from "./SubscribeForm";
import PaySystemList from "./PaySystemList";
import Contacts from "./Contacts";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SubscribeForm subCont={styles.container} />
      <Contacts hidden={styles["desktop-hidden"]} />
      <div className={styles.container}>
        <div className={styles["desktop-wrapper"]}>
          <Contacts hidden={styles["desktop-only"]} />
          <div className={styles.info}>
            <h3 className={styles.title}>Інформація</h3>
            <NavBar navUl={styles.ul} navLink={styles.link} navLi={styles.li} />
          </div>
          <div className={styles.catalog}>
            <h3 className={styles.title}>Каталог</h3>
            <Catalog
              catUl={styles.ul}
              catFlex={styles["cat-flex"]}
              catLi={styles.li}
              catLink={styles.link}
              catIcon={styles["cat-icon"]}
            />
          </div>
        </div>
        <div className={styles["rights-wrapper"]}>
          <p className={styles.rights}>&#169; Bubu 2022. Всі права захищені.</p>
          <PaySystemList
            psUl={styles.ul}
            psFlex={styles["ps-flex"]}
            psImg={styles["ps-img"]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
