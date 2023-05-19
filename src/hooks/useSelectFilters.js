import { useSelector } from "react-redux";

import {
  selectSubcategory,
  selectAvailableOnly,
  selectSaleOnly,
  selectPrice,
  selectProducers,
} from "redux/filters/selectors";

export const useSelectFilters = () => {
  const subcategory = useSelector(selectSubcategory);
  const availableOnly = useSelector(selectAvailableOnly);
  const saleOnly = useSelector(selectSaleOnly);
  const price = useSelector(selectPrice);
  const producers = useSelector(selectProducers);

  return {
    subcategory,
    saleOnly,
    availableOnly,
    price,
    producers,
  };
};
