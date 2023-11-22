import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  initialState: false,
};

export const myProgressSlice = createSlice({
  name: "myProgressToolkit",
  initialState,
  reducers: {
    submitProgress: (state) => {
      /* eslint-disable */ state.initialState = true;
    },
    backToInitial: (state) => {
      /* eslint-disable */ state.initialState = false;
    },
  },
});

export const { submitProgress, backToInitial } = myProgressSlice.actions;
export default myProgressSlice.reducer;
