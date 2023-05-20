import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const productsInitialState = {
  cart: [],
  seen: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {
    addToCartProduct: {
      reducer(state, action) {
        state.cart.push(action.payload);
      },
    },
    addToSeenProduct: {
      reducer(state, action) {
        state.seen.push(action.payload);
      },
    },
  },
});

const persistConfig = {
  key: "products",
  storage,
};

export const productsReducer = persistReducer(
  persistConfig,
  productsSlice.reducer
);
export const { addToCartProduct, addToSeenProduct } = productsSlice.actions;

// Selector
export const selectCart = (state) => state.products.cart;
export const selectSeen = (state) => state.products.seen;
