import {IUser} from './auth';
import {INotification} from './notification';

export interface IStoreState {
  user: IUser;
  notification: INotification;
}
