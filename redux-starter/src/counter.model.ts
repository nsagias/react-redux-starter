import { INCREMENT, INCREASE ,DECREMENT } from "./constants";

export interface IState {
  counter: number;
  showCounter: true;
}

export interface ICounterReducer {
  (state: IState | undefined, action: CounterAction): IState;
}
// type version
// export type ICounterReducer2 = (state: IState | undefined, action: CounterAction) => IState;





export interface IIncrement {
  type: typeof INCREMENT;
  payload: number;
}

export interface IIncrease {
  type: typeof INCREASE;
  payload: number;
}

export interface IDecrement {
  type: typeof DECREMENT;
  payload: number;
}


export type CounterAction = IIncrement | IIncrease| IDecrement;


