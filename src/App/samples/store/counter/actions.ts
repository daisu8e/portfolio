import {CounterAction, CounterActionType} from "./types";

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
});

export const add = (amount: number): CounterAction => ({
  type: CounterActionType.ADD,
  amount: amount,
});
