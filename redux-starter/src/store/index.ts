// import { useEffect, useState } from "react";
import { createStore } from "redux";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IState, ICounterReducer, CounterAction } from "../counter.model";
import { 
  INITIAL_STATE_COUNTER, 
  INCREMENT, 
  DECREMENT, 
  INCREASE,
  TOGGLE,
  COUNTER
} from "../constants";


createSlice({
  name: COUNTER,
  initialState: INITIAL_STATE_COUNTER,
  reducers: {
    increment(state): void {
      state.counter++;
    },
    increase(state): void {
      state.counter--;
    },
    decrement(state, action): void {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state): void {
      state.showCounter = !state.showCounter;
    }
  }

});

const counterReducer: ICounterReducer = (
  state: IState = INITIAL_STATE_COUNTER, action: CounterAction) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
      action: action.payload
    }
  };

  if (action.type === INCREASE) {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    }
  };
  
  if (action.type === DECREMENT) {
    return {
      counter: state.counter -1,
      showCounter: state.showCounter,
      action: action.payload
    }
  };

  if (action.type === TOGGLE) {
   return {
      showCounter: !state.showCounter,
      counter: state.counter,
      action: action.payload
    }
  };
  return state;
};

const store = createStore(counterReducer);



export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch