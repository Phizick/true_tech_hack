import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  light: "",
  contrast: "",
  ottenok: "",
  mask: "",
  notScene: "",
};

export const maskSlice = createSlice({
  name: "mask",
  initialState,
  reducers: {
    setLight: (state, action) => {
      state.light = action.payload;
    },
    setContrast: (state, action) => {
      state.contrast = action.payload;
    },
    setOttenok: (state, action) => {
      state.ottenok = action.payload;
    },
    setMask: (state, action) => {
      state.mask = action.payload;
    },
    setNotScene: (state, action) => {
      state.notScene = action.payload;
    },
  },
});

export const { setLight, setContrast, setOttenok, setMask, setNotScene } =
  maskSlice.actions;
