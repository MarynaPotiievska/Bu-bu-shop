import { Link } from "react-router-dom";

import { ReactComponent as CarriageIcon } from "assets/icons/carriage.svg";
import { ReactComponent as RoomIcon } from "assets/icons/room.svg";
import { ReactComponent as ChairIcon } from "assets/icons/chair.svg";
import { ReactComponent as FeedingIcon } from "assets/icons/feeding.svg";
import { ReactComponent as SoapIcon } from "assets/icons/soap.svg";
import { ReactComponent as AutochairIcon } from "assets/icons/autochair.svg";
import { ReactComponent as CarIcon } from "assets/icons/car.svg";
import { ReactComponent as ToyIcon } from "assets/icons/toy.svg";
import { ReactComponent as ClothesIcon } from "assets/icons/clothes.svg";
import { ReactComponent as NewIcon } from "assets/icons/new.svg";

const Catalog = ({ catUl, catLi, catLink, catIcon, catFlex }) => {
  return (
    <ul className={`${catUl} ${catFlex}`}>
      <li>
        <ul className={catUl}>
          <li className={catLi}>
            <Link to="/catalog/carriages" className={catLink}>
              <CarriageIcon className={catIcon} />
              <span>Дитячі коляски</span>
            </Link>
          </li>
          <li className={catLi}>
            <Link to="/catalog/room" className={catLink}>
              <RoomIcon className={catIcon} />
              <span>Дитяча кімната</span>
            </Link>
          </li>
          <li className={catLi}>
            <Link to="/catalog/chairs" className={catLink}>
              <ChairIcon className={catIcon} />
              <span>Стільці і шезлонги</span>
            </Link>
          </li>
          <li className={catLi}>
            <Link to="/catalog/feeding" className={catLink}>
              <FeedingIcon className={catIcon} />
              <span>Для годування</span>
            </Link>
          </li>
          <li className={catLi}>
            <Link to="/catalog/hygiene" className={catLink}>
              <SoapIcon className={catIcon} />
              <span>Гігієна та догляд</span>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <ul className={catUl}>
          <li className={catLi}>
            <Link to="/catalog/autochairs" className={catLink}>
              <AutochairIcon className={catIcon} />
              <span>Автокрісла</span>
            </Link>
          </li>
          <li className={catLi}>
            <Link to="/catalog/transport" className={catLink}>
              <CarIcon className={catIcon} />
              <span>Дитячий транспорт</span>
            </Link>
          </li>
          <li className={catLi}>
            <Link to="/catalog/toys" className={catLink}>
              <ToyIcon className={catIcon} />
              <span>Іграшки</span>
            </Link>
          </li>
          <li className={catLi}>
            <Link to="/catalog/clothes" className={catLink}>
              <ClothesIcon className={catIcon} />
              <span>Одяг</span>
            </Link>
          </li>
          <li className={catLi}>
            <Link to="/catalog/new" className={catLink}>
              <NewIcon className={catIcon} />
              <span>Новий товар</span>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Catalog;
