import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducers from "./reducers/mainReducers";
import reserveReducer from "./reducers/reserveReducer";

const rootReducer = combineReducers({
  mainState: mainReducers.reducer,
  reserveState: reserveReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
