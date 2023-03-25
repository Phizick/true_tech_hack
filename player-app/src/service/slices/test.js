import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "",
  error: "",
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    testAction: (state) => {
      state.test = "Test";
    },
    testActionError: (state) => {
      state.error = "ok";
    },
  },
});

export const { testAction, testActionError } = testSlice.actions;
