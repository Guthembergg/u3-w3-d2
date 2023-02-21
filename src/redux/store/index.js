import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "../reducers/dataReducer";
import favouriteReducer from "../reducers/favouriteReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  data: dataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
