import { configureStore, combineReducers } from "@reduxjs/toolkit";

import fitnessReducer from "./reducers/reducers";
import { myProgressSlice } from "./reducers/myProgressReducer";

const rootReducer = combineReducers({
  myProgressToolkit: myProgressSlice.reducer,
  fitness: fitnessReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
