/** @format */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { JournalScreen } from "../Journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={JournalScreen} />
        <Route path="/auth" component={AuthRouter} />
        <Redirect to="/auth" />
      </Switch>
    </Router>
  );
};
