import { createSlice } from "@reduxjs/toolkit";
import { SHOWCOUNTER, INITIAL_STATE_SHOW_COUNTER } from "../constants";
import { IShowCounter } from "../showCounter.model";

const showCounterSlice = createSlice({
  name: SHOWCOUNTER,
  initialState: INITIAL_STATE_SHOW_COUNTER,
  reducers: {
    toggleCounter(state: IShowCounter): void {
      state.showCounter = !state.showCounter;
    }
  }
});

export const showCounterActions = showCounterSlice.actions;
export default showCounterSlice.reducer;