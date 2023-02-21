import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "../reducers/dataReducer";
import favouriteReducer from "../reducers/favouriteReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [
    encryptTransform({ secretKey: process.env.REACT_APP_PERSIST_KEY }),
  ],
};

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  data: dataReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
