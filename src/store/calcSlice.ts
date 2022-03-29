import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { activeBlockTypes } from "../types";

export type modeTypes = "runtime" | "constructor";

export interface ICalc {
  mode: modeTypes;
  activeBlock: activeBlockTypes[];
}

const initialState: ICalc = {
  mode: "runtime",
  activeBlock: [],
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    addBlock: (
      state,
      action: PayloadAction<{
        block: activeBlockTypes;
        position: activeBlockTypes;
      }>
    ) => {
      const { block, position } = action.payload;
      const index = state.activeBlock.findIndex(
        (item: activeBlockTypes) => item === position
      );
      const cloneActiveBlock = [...state.activeBlock];
      cloneActiveBlock.splice(index + 1, 0, block);
      state.activeBlock = cloneActiveBlock;
    },
    removeBlock: (state, action: PayloadAction<activeBlockTypes>) => {
      state.activeBlock = [...state.activeBlock].filter(
        (item: activeBlockTypes) => item !== action.payload
      );
    },
  },
});

export const { addBlock, removeBlock } = calcSlice.actions;

export default calcSlice.reducer;
