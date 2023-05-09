import styles from "./Contacts.module.css";

import SocialLinks from "components/SocialLinks";

const Contacts = ({ hidden }) => {
  return (
    <div className={`${styles["contacts"]} ${hidden} `}>
      <a href="tel:0631284609" className={styles.phone}>
        (063) 128-46-09
      </a>
      <a href="mailto:bubu.shop2018@gmail.com" className={styles.text}>
        bubu.shop2018@gmail.com
      </a>
      <p className={styles.text}>
        Одеса, вул. Михайлівська 8 (щодня з 10:00 до 20:00)
      </p>
      <SocialLinks style={styles["soc-links"]} />
    </div>
  );
};

export default Contacts;
