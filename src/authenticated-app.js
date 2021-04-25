import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Overall, Products, Distributors } from "./pages";

const AuthenticatedApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Overall />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/distributors">
          <Distributors />
        </Route>
      </Switch>
    </Router>
  );
};

export default AuthenticatedApp;
