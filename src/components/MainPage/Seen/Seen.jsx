import { useSelector } from "react-redux";

import ProductsSection from "components/MainPage/ProductsSection";

import styles from "./Seen.module.css";

import { selectSeen } from "redux/productsSlice";

const Seen = () => {
  const seenProducts = useSelector(selectSeen);

  const shownProducts = ([first, second, third, forth, fifth, ...arg]) => {
    return [first, second, third, forth, fifth];
  };

  return (
    <ProductsSection
      products={shownProducts(seenProducts)}
      title={"Ви переглядали"}
      unvisible={styles.subtitle}
      container={styles.container}
    />
  );
};

export default Seen;
