import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
export default store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});



/**
 * Create Store
 *  - configureStore() - RTK - store.js
 *
 * Provide my store to app
 *  - <Provider store = {store}> - import from react-redux
 *
 * Slice
 *  - RTK - createSlice({
 *          name: "",
 *          initialState:
 *          reducers: {
 *             addItem: (state, action)=> { state= action.payload}
 *          }
 *      })
 *    export const {addItem, removeItem} = cartSlice.actions;
 *    export default cartSlice;
 *
 * Put that Slice reducer into Store - store.js
 *      - {
 *        reducer: {
 *             cart: cartSlice.reducer,
 *             user: userSlice.reducer
 *         }
 * }
 *
 * */