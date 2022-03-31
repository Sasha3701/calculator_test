import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mathFunc } from "../utils";

export interface INum {
  value: string;
  operation: string;
  result: string;
}

const initialState: INum = {
  value: "",
  operation: "",
  result: "",
};

export const calcSlice = createSlice({
  name: "num",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      if (state.value.length > 15) {
        return;
      }
      if (state.value.includes(",") && action.payload === ",") {
        return;
      }
      state.value += action.payload;
    },
    pressCalc: (state, action: PayloadAction<string>) => {
      if (state.value && state.result) {
        const { value, operation, result } = state;
        state.result = mathFunc(operation, result, value)!
        state.operation = action.payload;
        state.value = "";
      }
      if (state.value) {
        state.operation = action.payload;
        state.result += state.value;
        state.value = "";
      }
      if (state.result) {
        state.operation = action.payload;
      }
    },
    math: (state) => {
      const { value, operation, result } = state;
      if (value && result) {
        state.value = mathFunc(operation, result, value)!
        state.operation = "";
        state.result = "";
      }
    },
  },
});

export const { changeValue, pressCalc, math } = calcSlice.actions;

export default calcSlice.reducer;
