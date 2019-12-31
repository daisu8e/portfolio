import {createStore, combineReducers} from 'redux'

import currentUser from './currentUser/reducer'

const rootReducer = combineReducers({
  currentUser,
});

export type StoreState = ReturnType<typeof rootReducer>;

export function configureStore() {
  return createStore(rootReducer);
}

