import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { activeBlockTypes } from "../types";

export type modeTypes = "runtime" | "constructor";

export interface ICalc {
  mode: modeTypes;
  activeBlock: activeBlockTypes[];
  current: null | activeBlockTypes;
  pos: null | activeBlockTypes;
}

const initialState: ICalc = {
  mode: "constructor",
  activeBlock: [],
  current: null,
  pos: null,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    saveCurrentBlock: (state, action: PayloadAction<activeBlockTypes>) => {
      state.current = action.payload;
    },
    savePosBlock: (state, action: PayloadAction<activeBlockTypes | null>) => {
      state.pos = action.payload;
    },
    addBlock: (
      state,
      action: PayloadAction<{
        block: activeBlockTypes;
        position: activeBlockTypes | null;
      }>
    ) => {
      const { block, position } = action.payload;
      const index = state.activeBlock.findIndex(
        (item: activeBlockTypes) => item === position
      );
      const cloneActiveBlock = [...state.activeBlock].filter(
        (item: activeBlockTypes) => item !== block
      );
      if (index === -1) {
        cloneActiveBlock.push(block);
        state.activeBlock = cloneActiveBlock;
        state.current = null;
        return;
      }
      cloneActiveBlock.splice(block === 'display' ? 0 : index + 1, 0, block);
      state.activeBlock = cloneActiveBlock;
      state.current = null;
    },
    removeBlock: (state, action: PayloadAction<activeBlockTypes>) => {
      state.activeBlock = [...state.activeBlock].filter(
        (item: activeBlockTypes) => item !== action.payload
      );
    },
    changeMode: (state) => {
      state.mode = state.mode === "runtime" ? "constructor" : "runtime";
    },
  },
});

export const {
  addBlock,
  removeBlock,
  changeMode,
  saveCurrentBlock,
  savePosBlock,
} = calcSlice.actions;

export default calcSlice.reducer;
