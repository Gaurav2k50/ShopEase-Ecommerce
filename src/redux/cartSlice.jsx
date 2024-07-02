import { createSlice } from "@reduxjs/toolkit";

// Initialize state with the cart items stored in localStorage, or an empty array if none are found
const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

// Create a Redux slice for the cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Reducer to add an item to the cart
    addToCart(state, action) {
      state.push(action.payload);
    },
    // Reducer to delete an item from the cart
    deleteFromCart(state, action) {
      return state.filter((item) => item.id != action.payload.id);
    },
  },
});

// Export the actions generated by createSlice
export const { addToCart, deleteFromCart } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;