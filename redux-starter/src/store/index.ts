import { useEffect, useState } from "react";
import { createStore } from "redux";
import { IState, ICounterReducer } from "../counter.model";
import { INITIAL_STATE_COUNTER, INCREMENT, DECREMENT } from "../constants";


interface IIncrement {
  type: "increment";
  INCREMENT: string;
}

interface IDecrement {
  type: 'decrement';
  DECREMENT: string;
}

type Action = IIncrement | IDecrement;


const [initialState, setIinitialState] = useState<IState>(INITIAL_STATE_COUNTER);
useEffect(() => {
  // call from api 
  setIinitialState(initialState);
}, []);

const counterReducer = (state:IState = { counter: 0 }, action: Action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1
    }
  };
};

const store = createStore();