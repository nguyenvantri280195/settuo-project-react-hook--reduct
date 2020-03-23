import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { PATH } from "./constants";
import { LogIn } from "./pages";
import { MainPage } from "./pages/main";
import _ from "lodash";

export const Routes = () => {
  const history = useHistory();

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    const path = history.location.pathname;
    if (token) {
      if (_.includes([PATH.login, PATH.home], path)) {
        return history.push(PATH.recordList);
      }
    } else {
      return history.push(PATH.login);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Switch>
      <Route path={PATH.login} exact={true} component={LogIn} />
      <Route path={PATH.home} component={MainPage} />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={LogIn} />
    </Switch>
  );
};
