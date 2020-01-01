import BaseAction from "../BaseAction";
import {User} from 'App/models/entities/User';

export interface CurrentUser {
  user: User;
}

export interface CurrentUserAction extends BaseAction {
  type: CurrentUserActionType;
  payload?: CurrentUser;
}

export enum CurrentUserActionType {
  UPDATE = 'CurrentUser/update',
  RESTORE = 'CurrentUser/restore',
}
