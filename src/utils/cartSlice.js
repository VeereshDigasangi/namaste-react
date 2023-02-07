import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: {} },
  reducers: {
    addItems: (state, action) => {
      state.items[action.payload.id] = {
        ...action.payload,
        itemCount: state.items[action.payload.id]?.itemCount
          ? state.items[action.payload.id].itemCount + 1
          : 1,
      };
    },
    removeItem: (state, action) => {
      if (state.items[action.payload].itemCount === 1) {
        delete state.items[action.payload];
      } else {
        state.items[action.payload] = {
          ...state.items[action.payload],
          itemCount: state.items[action.payload].itemCount
            ? state.items[action.payload].itemCount - 1
            : 0,
        };
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice;
