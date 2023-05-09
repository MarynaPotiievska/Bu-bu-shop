import { useSelector } from "react-redux";

import About from "components/MainPage/About/About";
import Sale from "components/MainPage/Sale";
import Seen from "components/MainPage/Seen/Seen";

import { selectSeen } from "redux/productsSlice";
import Brands from "components/MainPage/Brands";
import Slider from "components/MainPage/Slider/Slider";

const Main = () => {
  const seenProducts = useSelector(selectSeen);
  return (
    <main>
      <Slider />
      <Sale />
      <Brands />
      <About />
      {seenProducts.length > 0 && <Seen />}
    </main>
  );
};

export default Main;
