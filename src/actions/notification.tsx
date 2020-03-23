import {UPDATE_NOTIFICATION} from '../constants';
import {INotification} from '../types/notification';
import {Action} from 'redux';

// export interface IUpdateNotificationAction {
//     type: UPDATE_NOTIFICATION,
//     payload: INotification
// }

export interface IUpdateNotificationAction extends Action<UPDATE_NOTIFICATION> {
  payload: INotification;
}

export const updateNotificationAction = (
  noti: INotification,
): IUpdateNotificationAction => {
  return {
    type: UPDATE_NOTIFICATION,
    payload: noti,
  };
};
