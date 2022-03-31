import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        return
      }
      if (state.value.includes(",") &&  action.payload === ",") {
        return
      }
      state.value += action.payload;
    },
    pressCalc: (state, action: PayloadAction<string>) => {
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
        switch (operation) {
          case "+":
            state.value = String(
              Math.round((parseFloat(result) + parseFloat(value)) * 10**15) / 10**15
            ).replace(".", ",");
            break;
          case "-":
            state.value = String(
              Math.round((parseFloat(result) - parseFloat(value)) * 10**15) / 10**15
            ).replace(".", ",");
            break;
          case "/":
            const numResult = Math.round((parseFloat(result) / parseFloat(value)) * 10**15) / 10**15;
            state.value = numResult === Infinity ? 'Не определено' : String(numResult).replace(".", ",");
            break;
          case "*":
            state.value = String(
              Math.round(parseFloat(result) * parseFloat(value) * 10**15) / 10**15
            ).replace(".", ",");
            break;
          default:
            break;
        }
      }
    },
  },
});

export const { changeValue, pressCalc, math } = calcSlice.actions;

export default calcSlice.reducer;
