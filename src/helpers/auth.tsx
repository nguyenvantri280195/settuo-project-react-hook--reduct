import { ILoginRequest } from "../types/auth";
import { PATH } from "../constants";
import { REACT_APP_API_URL } from "./environment";
import { history } from "../";

export const loginAction = async (reqBody: ILoginRequest) => {
  const request = new Request(`${REACT_APP_API_URL}/api/v1/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    },
    body: JSON.stringify(reqBody)
  });
  const response = await fetch(request);
  if (response) {
    const user = await response.json();
    if (user && user.data) {
      localStorage.setItem("refresh", user.data.refresh);
      localStorage.setItem("access", user.data.access);
      history.push(PATH.recordList);
      return true;
    }
  }
  return false;
};

export const logoutAction = () => {
  localStorage.removeItem("refresh");
  localStorage.removeItem("access");
  history.push(PATH.login);
};
