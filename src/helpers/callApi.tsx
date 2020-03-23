import { ICallApiRequest } from "../types/callApi";
import { PATH } from "../constants";
import { REACT_APP_API_URL } from "./environment";
import { history } from "../";

export const callApi = async (reqBody: ICallApiRequest) => {
  const request = new Request(`${REACT_APP_API_URL}${reqBody.url}`, {
    method: reqBody.method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": reqBody.method + "OPTIONS"
    },
    body: JSON.stringify(reqBody.params)
  });

  const response = await fetch(request);
  return response;
};

export const logoutAction = () => {
  localStorage.removeItem("refresh");
  localStorage.removeItem("access");
  history.push(PATH.login);
};
