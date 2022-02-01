import { useEffect, useState } from "react";
import {createStore} from "redux";


interface IInitialState {
  counter: number;
}

interface ICounterReducer {
  state: {counter: number};
  action: {};
}

const INITIAL_STATE_COUNTER: IInitialState = { counter: 0 };

const [initialState, setIinitialState] = useState<IInitialState>(INITIAL_STATE_COUNTER);
useEffect(() => {
  // call from api 
  setIinitialState(initialState);
}, []);

const counterReducer: ICounterReducer = (state:{} = { counter: 0 }, action:{}) => {};

const store = createStore();