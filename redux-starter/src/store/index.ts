import { useEffect, useState } from "react";
import { createStore } from "redux";
import { IState, ICounterReducer, CounterAction } from "../counter.model";
import { INITIAL_STATE_COUNTER, INCREMENT, DECREMENT } from "../constants";


const [initialState, setIinitialState] = useState<IState>(INITIAL_STATE_COUNTER);
useEffect(() => {
  // call from api 
  setIinitialState(initialState);
}, []);

const counterReducer = (state:IState = INITIAL_STATE_COUNTER, action: CounterAction) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1
    }
  };
  
  if (action.type === DECREMENT) {
    return {
      counter: state.counter -1
    }
  }
};

const store = createStore();