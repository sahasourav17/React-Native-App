import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authSlice from "./reducers/authSlice";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  timeout: 400,
  // whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const combineReducer = {
  auth: persistedReducer,
};

const middlewares = [];

if (__DEV__) {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: true,
});

export const persistor = persistStore(store);
