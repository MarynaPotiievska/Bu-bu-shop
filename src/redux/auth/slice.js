import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { register, signin } from "./operations";

const extraActions = [register, signin];
const getActions = (type) => extraActions.map((action) => action[type]);

const initialState = {
  user: { name: null, email: null, phone: null },
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    return builder.addMatcher(
      isAnyOf(...getActions("fulfilled")),
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      }
    );
  },
});

export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
