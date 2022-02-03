
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IState } from "../counter.model";
import { COUNTER, INITIAL_STATE_COUNTER } from "../constants";

const counterSlice = createSlice({
  name: COUNTER,
  initialState: INITIAL_STATE_COUNTER,
  reducers: {
    increment(state: IState): void {
      state.counter++;
    },
    increase(state: IState,  action: PayloadAction<number>): void {
      state.counter = state.counter + action.payload;
    },
    decrement(state: IState): void {
      state.counter--;
    },
  }
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;