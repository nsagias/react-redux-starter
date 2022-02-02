import { IState } from "./counter.model";
import { IAuthentication } from "./authentication.model";
import { IShowCounter } from "./showCounter.model";

export const INITIAL_STATE_COUNTER: IState = { counter: 0 };
export const INITIAL_STATE_SHOW_COUNTER: IShowCounter = { showCounter: true};

export const INITIAL_STATE_AUTHENTICATION: IAuthentication = { isAuthenticated: false};

export const COUNTER: string = "COUNTER";
export const AUTHENTICATION: string = "AUTHENTICATION";
export const INCREMENT: string = "INCREMENT";
export const INCREASE: string = "INCREASE";
export const DECREMENT: string = "DECREMENT";
export const TOGGLE: string = "TOGGLE";
