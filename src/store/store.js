import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducers from "./reducers/mainReducers";
import reserveReducer from "./reducers/reserveReducer";
import { coursesApi } from "../api/api";

const rootReducer = combineReducers({
  mainState: mainReducers.reducer,
  reserveState: reserveReducer,
});

const store = configureStore({
  reducer: {
    rootReducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware),
});

export default store;
