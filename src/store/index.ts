import {createStore, combineReducers} from 'redux'

import counter from './counter/reducer'

const rootReducer = combineReducers({
  counter,
});

export type StoreState = ReturnType<typeof rootReducer>;

export function configureStore() {
  return createStore(rootReducer);
}

