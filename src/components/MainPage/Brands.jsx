import styles from "./MainPage.module.css";

import playDoh1xMobImg from "assets/images/brands/play_doh@1x_m.png";
import playDoh2xMobImg from "assets/images/brands/play_doh@2x_m.png";
import playDoh1xDeskTabImg from "assets/images/brands/play_doh@1x_dt.png";
import playDoh2xDeskTabImg from "assets/images/brands/play_doh@2x_dt.png";
import huggies1xMobImg from "assets/images/brands/huggies@1x_m.png";
import huggies2xMobImg from "assets/images/brands/huggies@2x_m.png";
import huggies1xDeskTabImg from "assets/images/brands/huggies@1x_dt.png";
import huggies2xDeskTabImg from "assets/images/brands/huggies@2x_dt.png";
import hipp1xMobImg from "assets/images/brands/hipp@1x_m.png";
import hipp2xMobImg from "assets/images/brands/hipp@2x_m.png";
import hipp1xDeskTabImg from "assets/images/brands/hipp@1x_dt.png";
import hipp2xDeskTabImg from "assets/images/brands/hipp@2x_dt.png";
import pampers1xMobImg from "assets/images/brands/pampers@1x_m.png";
import pampers2xMobImg from "assets/images/brands/pampers@2x_m.png";
import pampers1xDeskTabImg from "assets/images/brands/pampers@1x_dt.png";
import pampers2xDeskTabImg from "assets/images/brands/pampers@2x_dt.png";
import anex1xDeskTabImg from "assets/images/brands/anex@1x_dt.png";
import anex2xDeskTabImg from "assets/images/brands/anex@2x_dt.png";
import lego1xDeskTabImg from "assets/images/brands/lego@1x_dt.png";
import lego2xDeskTabImg from "assets/images/brands/lego@2x_dt.png";
import bebivita1xDeskTabImg from "assets/images/brands/bebivita@1x_dt.png";
import bebivita2xDeskTabImg from "assets/images/brands/bebivita@2x_dt.png";

import Section from "./Section";
import PictureLink from "./PictureLink";
import ImgLink from "./ImgLink";

const Brands = () => {
  return (
    <Section title={"Популярні бренди"} unvisible={styles.unvisible}>
      <ul className={styles.ul}>
        <li>
          <PictureLink
            imgMobX={playDoh1xMobImg}
            imgMobXx={playDoh2xMobImg}
            imgDeskTabX={playDoh1xDeskTabImg}
            imgDeskTabXx={playDoh2xDeskTabImg}
            brand="Play-Doh"
          />
        </li>
        <li>
          <PictureLink
            imgMobX={huggies1xMobImg}
            imgMobXx={huggies2xMobImg}
            imgDeskTabX={huggies1xDeskTabImg}
            imgDeskTabXx={huggies2xDeskTabImg}
            brand="Huggies"
          />
        </li>
        <li>
          <PictureLink
            imgMobX={hipp1xMobImg}
            imgMobXx={hipp2xMobImg}
            imgDeskTabX={hipp1xDeskTabImg}
            imgDeskTabXx={hipp2xDeskTabImg}
            brand="Hipp"
          />
        </li>
        <li>
          <PictureLink
            imgMobX={pampers1xMobImg}
            imgMobXx={pampers2xMobImg}
            imgDeskTabX={pampers1xDeskTabImg}
            imgDeskTabXx={pampers2xDeskTabImg}
            brand="Pampers"
          />
        </li>
        <li>
          <ImgLink
            imgDeskTabX={anex1xDeskTabImg}
            imgDeskTabXx={anex2xDeskTabImg}
            brand="Anex"
          />
        </li>
        <li>
          <ImgLink
            imgDeskTabX={lego1xDeskTabImg}
            imgDeskTabXx={lego2xDeskTabImg}
            brand="Lego"
          />
        </li>
        <li>
          <ImgLink
            imgDeskTabX={bebivita1xDeskTabImg}
            imgDeskTabXx={bebivita2xDeskTabImg}
            brand="Bebivita"
          />
        </li>
      </ul>
    </Section>
  );
};

export default Brands;
