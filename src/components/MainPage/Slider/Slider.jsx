import { useState } from "react";

import slides from "./sliderData";

import { ReactComponent as ArrowLeftIcon } from "assets/icons/arrow_left.svg";
import { ReactComponent as ArrowRightIcon } from "assets/icons/arrow_right.svg";

import styles from "./Slider.module.css";
import mainStyles from "../MainPage.module.css";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const position = (index, current) => {
    if (index === current) {
      return `${styles.slide} ${styles.active}`;
    } else if (index < current) {
      return `${styles.slide} ${styles.prev}`;
    } else {
      return `${styles.slide} ${styles.next}`;
    }
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <div className={`${mainStyles.container} ${styles["slider-thumb"]}`}>
        <button
          type="button"
          onClick={prevSlide}
          className={`${styles["slider-btn"]} ${styles["arrow-left"]}`}
        >
          <ArrowLeftIcon />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className={`${styles["slider-btn"]} ${styles["arrow-right"]}`}
        >
          <ArrowRightIcon />
        </button>
        {slides.map((slide, index) => {
          return (
            <div className={position(index, current)} key={index}>
              {index === current && (
                <picture>
                  <source
                    media="(min-width: 1001px)"
                    srcSet={`${slide.img.desk[0]} 1x, ${slide.img.desk[1]} 2x`}
                    type="image/jpg"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={`${slide.img.tab[0]} 1x, ${slide.img.tab[1]} 2x`}
                    type="image/jpg"
                  />
                  <source
                    media="(min-width: 480px)"
                    srcSet={`${slide.img.mobL[0]} 1x, ${slide.img.mobL[1]} 2x`}
                    type="image/jpg"
                  />
                  <source
                    media="(min-width: 360px)"
                    srcSet={`${slide.img.mobM[0]} 1x, ${slide.img.mobM[1]} 2x`}
                    type="image/jpg"
                  />
                  <source
                    media="(max-width: 359px)"
                    srcSet={`${slide.img.mobS[0]} 1x, ${slide.img.mobS[1]} 2x`}
                    type="image/jpg"
                  />
                  <img
                    src={slide.img.mobS[0]}
                    alt=""
                    className={styles["slider-img"]}
                  />
                </picture>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Slider;
