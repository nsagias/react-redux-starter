import { useEffect, useState } from "react";
import { createStore } from "redux";
import { IInitialState, ICounterReducer } from "../counter.model";
import { INITIAL_STATE_COUNTER, INCREMENT, DECREMENT } from "../constants";



const [initialState, setIinitialState] = useState<IInitialState>(INITIAL_STATE_COUNTER);
useEffect(() => {
  // call from api 
  setIinitialState(initialState);
}, []);

const counterReducer: ICounterReducer = (state:{} = { counter: 0 }, action:{}) => {};

const store = createStore();