import {CounterState, CounterAction, CounterActionType} from './types';

const initialState: CounterState = {
  count: 0
};

export default (state = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case CounterActionType.DECREMENT: return {...state, count: state.count - 1};
    case CounterActionType.INCREMENT: return {...state, count: state.count + 1};
    case CounterActionType.ADD:       return {...state, count: state.count + (action.amount || 0)};
    default:                          return state;
  }
};
