import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// Configure and create the Redux store
export const store = configureStore({
  reducer: {
    // Add the cart slice reducer
    cart: cartSlice,
  },
  devTools: true, // Enable Redux DevTools
});
