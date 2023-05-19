import products from "data/products.json";

export const useFilters = (
  category,
  subcategory,
  saleOnly,
  availableOnly,
  price,
  producers
) => {
  const { minPrice, maxPrice } = price;

  const categoryProducts = products.filter(
    (product) => product.categoryEn === category
  );

  const categoryProducers = categoryProducts
    .map((product) => product.producer)
    .filter((producer, index, array) => array.indexOf(producer) === index);

  const filteredBySubcategory =
    subcategory !== ""
      ? categoryProducts.filter(
          (product) => product.subcategory === subcategory
        )
      : categoryProducts;

  const filteredByAvailability = availableOnly
    ? filteredBySubcategory.filter((product) => product.available === true)
    : filteredBySubcategory;

  const filteredByDiscount = saleOnly
    ? filteredByAvailability.filter((product) => product.discount > 0)
    : filteredByAvailability;

  const filteredByPrice =
    Number(minPrice) > 0 ?? Number(maxPrice) < 30000
      ? filteredByDiscount.filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        )
      : filteredByDiscount;

  const filteredByProducers =
    producers.length > 0
      ? filteredByPrice.filter((product) =>
          producers.includes(product.producer)
        )
      : filteredByPrice;

  return { categoryProducts, categoryProducers, filteredByProducers };
};
