export enum NOTIFICATION_TYPE {
  error = 'error',
  success = 'success',
  warning = 'warning',
  info = 'info',
}

export interface INotification {
  show: boolean;
  type: NOTIFICATION_TYPE;
  message: string;
}
