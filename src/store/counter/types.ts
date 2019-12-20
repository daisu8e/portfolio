export interface CounterState {
  count: number;
}

export interface CounterAction {
  type: CounterActionType;
  amount?: number;
}

export enum CounterActionType {
  DECREMENT = 'COUNTER/DECREMENT',
  INCREMENT = 'COUNTER/INCREMENT',
  ADD = 'COUNTER/ADD',
}
