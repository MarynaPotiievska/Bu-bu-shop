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
    addtoCartProduct: {
      reducer(state, action) {
        return state.products.cart.push(action.payload);
      },
    },
    addtoSeenProduct: {
      reducer(state, action) {
        return state.products.seen.push(action.payload);
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
export const { addProduct, deleteProduct } = productsSlice.actions;

// Selector
export const selectCart = (state) => state.products.cart;
export const selectSeen = (state) => state.products.seen;
