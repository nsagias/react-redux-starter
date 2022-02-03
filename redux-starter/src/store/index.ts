// import { useEffect, useState } from "react";
// import { createStore } from "redux";
import { createSlice, configureStore, PayloadAction} from "@reduxjs/toolkit";
import { IAuthentication } from "../authentication.model";
import { IState, ICounterReducer, CounterAction } from "../counter.model";
import { IShowCounter } from "../showCounter.model";
import { 
  COUNTER,
  INITIAL_STATE_COUNTER, 
  // INCREMENT, 
  // DECREMENT, 
  // INCREASE,
  // TOGGLE,
  SHOWCOUNTER,
  INITIAL_STATE_SHOW_COUNTER,
  AUTHENTICATION,
  INITIAL_STATE_AUTHENTICATION
} from "../constants";




// const counterSlice = createSlice({
//   name: COUNTER,
//   initialState: INITIAL_STATE_COUNTER,
//   reducers: {
//     increment(state: IState): void {
//       state.counter++;
//     },
//     increase(state: IState,  action: PayloadAction<number>): void {
//       state.counter = state.counter + action.payload;
//     },
//     decrement(state: IState): void {
//       state.counter--;
//     },
//   }
// });

const showCounterSlice = createSlice({
  name: SHOWCOUNTER,
  initialState: INITIAL_STATE_SHOW_COUNTER,
  reducers: {
    toggleCounter(state: IShowCounter): void {
      state.showCounter = !state.showCounter;
    }
  }
});



const authenticationSlice = createSlice({
  name: AUTHENTICATION,
  initialState: INITIAL_STATE_AUTHENTICATION,
  reducers: {
    login(state: IAuthentication): void {
      state.isAuthenticated = true;
    },
    logout(state: IAuthentication): void {
      state.isAuthenticated = false;
    }
  }
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
  reducer: {
    counter: counterSlice.reducer,
    showCounter: showCounterSlice.reducer,
    authentication: authenticationSlice.reducer
  }
  
});

export const counterActions = counterSlice.actions;
export const showCounterActions = showCounterSlice.actions;
export const authenticationActions = authenticationSlice.actions;


export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch