import {INotification, NOTIFICATION_TYPE} from '../types';
import {IUpdateNotificationAction} from '../actions';
import {UPDATE_NOTIFICATION} from '../constants';

const initialNoti: INotification = {
  show: false,
  message: '',
  type: NOTIFICATION_TYPE.error,
};

export const notification = (
  state: INotification = initialNoti,
  action: IUpdateNotificationAction,
): INotification => {
  switch (action.type) {
    case UPDATE_NOTIFICATION:
      return action.payload;
    default:
      return state;
  }
};
