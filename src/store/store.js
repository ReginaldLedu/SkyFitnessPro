import { configureStore } from "@reduxjs/toolkit";
import fitnessReducer from "./reducers/reducers";

const store = configureStore({
  reducer: {
    fitness: fitnessReducer,
  },
});

export default store;
