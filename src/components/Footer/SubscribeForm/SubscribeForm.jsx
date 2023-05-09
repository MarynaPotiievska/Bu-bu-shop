import styles from "./SubscribeForm.module.css";

import footerImg1x from "assets/images/footer/mother_and_child@1x.png";
import footerImg2x from "assets/images/footer/mother_and_child@2x.png";

import { ReactComponent as ArrowIcon } from "assets/icons/arrow_right.svg";

const SubscribeForm = ({ subCont }) => {
  return (
    <div className={styles.sub}>
      <div className={subCont}>
        <form className={styles["sub-form"]}>
          <label htmlFor="subscribe" className={styles["sub-label"]}>
            Отримуйте промокоди та <br /> екслюзивні пропозиції
          </label>
          <div className={styles["sub-div"]}>
            <input
              id="subscribe"
              placeholder="Ваш email"
              className={styles["sub-input"]}
            />
            <button type="submit" className={styles["sub-btn"]}>
              <ArrowIcon />
            </button>
          </div>
        </form>
        <img
          srcSet={`${footerImg1x} 1x, ${footerImg2x} 2x`}
          src={footerImg1x}
          alt="Мама з дитиною"
          className={styles["sub-img"]}
        />
      </div>
    </div>
  );
};

export default SubscribeForm;
