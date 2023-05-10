import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const filtersInitialState = {
  sortBy: "За замовчуванням",
  subcategory: "",
  availableOnly: false,
  saleOnly: false,
  price: { minPrice: 0, maxPrice: 30000 },
  producers: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setSorting(state, action) {
      state.sortBy = action.payload;
    },
    setSubcategory(state, action) {
      state.subcategory = action.payload;
    },
    setAvailableOnly(state, action) {
      state.availableOnly = action.payload;
    },
    setSaleOnly(state, action) {
      state.saleOnly = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setProducers(state, action) {
      const { checked, value } = action.payload;
      if (!checked) {
        const index = state.producers.indexOf(value);
        state.producers.splice(index, 1);
      } else {
        state.producers.push(value);
      }
    },
  },
});

const persistConfig = {
  key: "filters",
  storage,
};

export const filtersReducer = persistReducer(
  persistConfig,
  filtersSlice.reducer
);

export const {
  setSorting,
  setSubcategory,
  setAvailableOnly,
  setSaleOnly,
  setPrice,
  setProducers,
} = filtersSlice.actions;
