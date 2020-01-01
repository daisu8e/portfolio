import {CurrentUser, CurrentUserAction, CurrentUserActionType} from './types';
import {User} from 'App/models/entities/User';

const initialState: CurrentUser = {
  user: new User('initial user')
};

export default (state = initialState, action: CurrentUserAction): CurrentUser => {
  switch (action.type) {
    case CurrentUserActionType.UPDATE:  return {...state, ...action.payload};
    case CurrentUserActionType.RESTORE: return {...state, ...initialState};
    default:                            return state;
  }
};
