import { configureStore } from "@reduxjs/toolkit";
import { maskSlice } from "../slices/maskSlice";

export const store = configureStore({
  reducer: {
    masks: maskSlice.reducer,
  },
});
