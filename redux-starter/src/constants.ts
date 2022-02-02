import { IState } from "./counter.model";
import { IAuthentication } from "./authentication.model";

export const INITIAL_STATE_COUNTER: IState = { counter: 0, showCounter: true};
export const INITIAL_STATE_AUTHENTICATION: IAuthentication = { isAuthenticated: false}

export const COUNTER: string = "counter";
export const INCREMENT: string = "INCREMENT";
export const INCREASE: string = "INCREASE";
export const DECREMENT: string = "DECREMENT";
export const TOGGLE: string = "TOGGLE";
