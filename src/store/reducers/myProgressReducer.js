import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  initialState: false,
  test: {
    test1: ""
  }
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
    testred: (state, action) => {
        state.test.test1 = action.payload
    }
  },
});

export const { submitProgress, backToInitial, testred } = myProgressSlice.actions;
export default myProgressSlice.reducer;
