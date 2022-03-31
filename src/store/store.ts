import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./calcSlice";
import numSlice from "./numSlice";

const store = configureStore({
  reducer: {
    calc: calcSlice,
    num: numSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
