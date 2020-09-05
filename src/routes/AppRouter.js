/** @format */

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { JournalScreen } from "../Journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const [check, setCheck] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsAuthenticated(true);
      }

      if (!user) {
        setIsAuthenticated(false);
      }

      setCheck(true);
    });
  }, [dispatch, setIsAuthenticated]);

  if (!check) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          isAuthenticated={isAuthenticated}
          component={JournalScreen}
        />
        <PublicRoute
          path="/auth"
          user={user}
          isAuthenticated={isAuthenticated}
          component={AuthRouter}
        />
      </Switch>
    </Router>
  );
};
