/** @format */

import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({
  component: Component,
  user,
  isAuthenticated,
  ...reset
}) => {
  return (
    <Route
      {...reset}
      component={(props) => {
        return isAuthenticated ? <Redirect to="/" /> : <Component {...props} />;
      }}
    />
  );
};
