/** @format */

import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { LoginScreen } from "../Auth/LoginScreen";
import { RegisterScreen } from "../Auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__container">
        <Switch>
          <Route path="/auth/login" component={LoginScreen} />
          <Route path="/auth/register" component={RegisterScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};
