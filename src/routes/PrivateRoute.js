/** @format */

import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  component: Componet,
  isAuthenticated,
  ...reset
}) => {
  return (
    <Route
      {...reset}
      component={(props) => {
        return isAuthenticated ? (
          <Componet {...props} />
        ) : (
          <Redirect to="/auth/login" />
        );
      }}
    />
  );
};
