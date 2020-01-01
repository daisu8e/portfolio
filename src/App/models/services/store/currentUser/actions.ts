import {CurrentUserAction, CurrentUserActionType} from './types';
import {User} from 'App/models/entities/User';

export const update = (user: User): CurrentUserAction => ({
  type: CurrentUserActionType.UPDATE,
  payload: {user},
});

export const restore = (): CurrentUserAction => ({
  type: CurrentUserActionType.UPDATE,
});
