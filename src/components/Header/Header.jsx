import styles from "./Header.module.css";

import { ReactComponent as MenuDeskIcon } from "assets/icons/menu_d.svg";
import { ReactComponent as MenuTabAndMobIcon } from "assets/icons/menu_tm.svg";
import { ReactComponent as SimpleArrow } from "assets/icons/arrow_left_simple.svg";

import NavBar from "components/NavBar";
import Catalog from "components/Catalog";

import SocialBar from "./SocialBar";
import SearchForm from "./SearchForm";
import ShoppingBar from "./ShoppingBar";
import LogoLink from "./LogoLink";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles["desktop-unvisible"]}>
          <div className={styles.nav}>
            <button type="button" className={styles["btn"]}>
              <MenuTabAndMobIcon />
            </button>
            <LogoLink />
          </div>
          <SearchForm />
          <ShoppingBar
            shopUl={styles["ul-desktop"]}
            shopSearch={[styles["btn"], styles["mobile-only"]]}
          />
        </div>
        <div
          className={`${styles["nav-desktop"]} ${styles["nav-bar-desktop"]}`}
        >
          <div className={styles["bar-desktop"]}>
            <LogoLink />
            <NavBar
              navBar={styles["bar-desktop"]}
              navUl={styles["ul-desktop"]}
              navLink={styles.link}
              navHidden={styles["visually-hidden"]}
            />
          </div>
          <SocialBar
            socBar={styles["bar-desktop"]}
            socPhone={styles.phone}
            socUl={styles["ul-desktop"]}
            socText={styles.text}
            socBtn={styles.btn}
            socIcon={styles["user-icon"]}
            socActive={styles.active}
          />
        </div>
        <div className={styles["nav-desktop"]}>
          <div className={styles["menu-desktop"]}>
            <MenuDeskIcon className={styles["menu-desk-icon"]} />
            <span className={styles["menu-text"]}>Каталог</span>
          </div>
          <SearchForm />
          <ShoppingBar
            shopUl={styles["ul-desktop"]}
            shopLink={styles["shop-link"]}
            shopSearch={[styles["btn"], styles["mobile-only"]]}
          />
        </div>

        <div className={styles["visually-hidden"]}>
          <button className={styles["desktop-unvisible"]}>
            <MenuDeskIcon />
            <span>Каталог</span>
          </button>
          <LogoLink />
          <NavBar navHidden={styles["visually-hidden"]} />
          <SocialBar />
        </div>

        <div className={styles["visually-hidden"]}>
          <p>
            <SimpleArrow />
            <span>Меню</span>
          </p>
          <Catalog />
        </div>
      </div>
    </header>
  );
};

export default Header;
