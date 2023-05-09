import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { sortBy } from "../constants";

const filtersInitialState = {
  sortBy: sortBy.default,
  category: "",
  availableOnly: false,
  saleOnly: false,
  price: [0, 30000],
  producer: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setSorting(state, action) {
      state.sortBy = action.payload;
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
export const { setSorting } = filtersSlice.actions;
