import React, { Dispatch } from "react";

import { IUser, ILoginRequest } from "../types/auth";
import { ICallApiRequest } from "../types/callApi";
import { callApi } from "../helpers/callApi";
import { history, store } from "../";
import { PATH } from "../constants";
import { useDispatch } from "react-redux";
import { updateNotificationAction } from "./notification";
import { NOTIFICATION_TYPE } from "../types/notification";

export const LOGIN = "LOGIN";
export type LOGIN = typeof LOGIN;
export interface ILoginAction {
  type: LOGIN;
  payload: ICallApiRequest;
}

export const loginAction = (
  request: ILoginRequest,
  dispatch: any
): ILoginAction => {
  const url = "api/v1/login/";
  const method = "POST";

  const payload = {
    method: method,
    url: url,
    params: request
  };

  store.dispatch(
    updateNotificationAction({
      show: true,
      message: "hello world",
      type: NOTIFICATION_TYPE.success
    })
  );

  callApi(payload)
    .then(async (response: any) => {
      localStorage.setItem("token", "qrewqsdfwe123asd3xzc");

      const user = await response.json();
      if (user && user.data) {
        localStorage.setItem("refresh", user.data.refresh);
        localStorage.setItem("access", user.data.access);
        history.push(PATH.recordList);
        ///dispatch(notification({message: "response.message", type: "success"}));
        return true;
      }
    })
    .catch(error => {
      ///dispatch(notification({message: "response.message", type: "error"}));
      return error;
    });

  return {
    type: LOGIN,
    payload: payload
  };
};

export const SET_USER_PROFILE = "SET_USER_PROFILE";
export type SET_USER_PROFILE = typeof SET_USER_PROFILE;

export interface ISetUserAction {
  type: SET_USER_PROFILE;
  payload: IUser;
}

export const setUserAction = (user: IUser): ISetUserAction => {
  return {
    type: SET_USER_PROFILE,
    payload: user
  };
};
