// import { useEffect, useState } from "react";
// import { createStore } from "redux";
import { createSlice, configureStore, PayloadAction} from "@reduxjs/toolkit";
// import { IState, ICounterReducer, CounterAction } from "../counter.model";
import { 
  INITIAL_STATE_COUNTER, 
  // INCREMENT, 
  // DECREMENT, 
  // INCREASE,
  // TOGGLE,
  COUNTER,
  AUTHENTICATION,
  INITIAL_STATE_AUTHENTICATION
} from "../constants";


const counterSlice = createSlice({
  name: COUNTER,
  initialState: INITIAL_STATE_COUNTER,
  reducers: {
    increment(state): void {
      state.counter++;
    },
    increase(state,  action: PayloadAction<number>): void {
      state.counter = state.counter + action.payload;
      
    },
    decrement(state): void {
      state.counter--;
    },
    toggleCounter(state): void {
      state.showCounter = !state.showCounter;
    }
  }

});



const AuthenticationSlice = createSlice({
  name: AUTHENTICATION,
  initialState: INITIAL_STATE_AUTHENTICATION,
  reducers: {}
});

// const counterReducer: ICounterReducer = (
//   state: IState = INITIAL_STATE_COUNTER, action: CounterAction) => {
//   if (action.type === INCREMENT) {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//       action: action.payload
//     }
//   };

//   if (action.type === INCREASE) {
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter,
//     }
//   };
  
//   if (action.type === DECREMENT) {
//     return {
//       counter: state.counter -1,
//       showCounter: state.showCounter,
//       action: action.payload
//     }
//   };

//   if (action.type === TOGGLE) {
//    return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//       action: action.payload
//     }
//   };
//   return state;
// };

// const store = createStore(counterReducer);
// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions


export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch