import { INCREMENT, DECREMENT } from "./constants";

export interface IState {
  counter: number;
}

export interface ICounterReducer {
  (state: IState | undefined, action: CounterAction): IState;
}
// type version
// export type ICounterReducer2 = (state: IState | undefined, action: CounterAction) => IState;





export interface IIncrement {
  type: typeof INCREMENT;
}

export interface IDecrement {
  type: typeof DECREMENT;
}

export type CounterAction = IIncrement | IDecrement;


