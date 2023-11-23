/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialState: false,
  user: {
    id: 0,
    login: "admin",
    password: "admin",
  },
};

const mainReducers = createSlice({
  name: "mainReducers",
  initialState,
  reducers: {
    submitProgress: (state) => {
      state.initialState = true;
    },
    backToInitial: (state) => {
      state.initialState = false;
    },
    userUpdate: (state, action) => {
      state.user = action.payload;
    },
    idUpdate: (state, action) => {
      state.user.id = action.payload;
    },
    loginUpdate: (state, action) => {
      state.user.login = action.payload;
    },
    passwordUpdate: (state, action) => {
      state.user.password = action.payload;
    },
  },
});

export const { submitProgress, backToInitial, loginUpdate, passwordUpdate } =
  mainReducers.actions;
export default mainReducers;
