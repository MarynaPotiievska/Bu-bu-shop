import ProductsSection from "components/MainPage/ProductsSection";
import products from "data/products.json";

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
    />
  );
};

export default Sale;
