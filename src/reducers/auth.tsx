import {IUser} from '../types/auth';
import {ISetUserAction, SET_USER_PROFILE} from '../actions';

export const user = (
  state: IUser = {name: '', role: '', username: ''},
  action: ISetUserAction,
): IUser => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return action.payload;
    }
    default:
      return state;
  }
};
