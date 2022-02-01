export interface IState {
  counter: number;
}


export interface IIncrement {
  type: "increment";
  INCREMENT: string;
}

export interface IDecrement {
  type: 'decrement';
  DECREMENT: string;
}


export type CounterAction = IIncrement | IDecrement;


export interface ICounterReducer {
  (state: IState | undefined, action: CounterAction): IState;
}
