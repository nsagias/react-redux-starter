// import { useEffect, useState } from "react";
import { createStore } from "redux";
import { IState, ICounterReducer, CounterAction } from "../counter.model";
import { INITIAL_STATE_COUNTER, INCREMENT, DECREMENT } from "../constants";


// const [initialState, setIinitialState] = useState<IState>(INITIAL_STATE_COUNTER);
// useEffect(() => {
//   // call from api 
//   setIinitialState(initialState);
// }, []);

const counterReducer: ICounterReducer = (state:IState = INITIAL_STATE_COUNTER, action: CounterAction) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
    }
  };
  
  if (action.type === DECREMENT) {
    return {
      counter: state.counter -1,
    }
  }
  return state;
};

const store = createStore(counterReducer);



export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch