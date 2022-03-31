import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";
import calcSlice from "./calcSlice";
import numSlice from "./numSlice";

const persistConfigNum = {
  key: "root",
  storage,
  blacklist: ['value', 'operation', 'result']
};

const persistedReducerNum = persistReducer(persistConfigNum, numSlice);

const reducers = combineReducers({
  calc: calcSlice,
  num: persistedReducerNum,
});

const persistConfigRoot = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfigRoot, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
