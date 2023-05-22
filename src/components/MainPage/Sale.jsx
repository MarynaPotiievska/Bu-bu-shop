import ProductsSection from "components/MainPage/ProductsSection";
import products from "data/products.json";

import styles from "./MainPage.module.css";

const Sale = () => {
  const saleProducts = products.filter((product) => product.discount > 0);

  const shownProducts = ([first, second, third, forth, fifth, ...arg]) => {
    return [first, second, third, forth, fifth];
  };

  return (
    <ProductsSection
      products={shownProducts(saleProducts)}
      title={"Акція!"}
      subtitle={"Sale"}
      container={styles.container}
    />
  );
};

export default Sale;
