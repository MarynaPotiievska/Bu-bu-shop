export const useSort = (products, sortBy) => {
  switch (sortBy) {
    case "По популярності":
      return products.sort(
        (firstProduct, secondProduct) =>
          secondProduct.rating - firstProduct.rating
      );
    case "Дешевші":
      return products.sort(
        (firstProduct, secondProduct) =>
          firstProduct.price - secondProduct.price
      );
    case "Дорожчі":
      return products.sort(
        (firstProduct, secondProduct) =>
          secondProduct.price - firstProduct.price
      );
    default:
      return products;
  }
};
