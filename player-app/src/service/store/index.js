import { configureStore } from "@reduxjs/toolkit";
import { maskSlice } from "../slices/maskSlice";
import { timeCodeSlice } from "../slices/timeCodeSlice";

export const store = configureStore({
  reducer: {
    masks: maskSlice.reducer,
    times: timeCodeSlice.reducer,
  },
});
