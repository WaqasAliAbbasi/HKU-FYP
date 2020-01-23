import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Stock, Image } from "./components";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Stock />
      </Route>
      <Route path="/image" exact>
        <Image />
      </Route>
    </Switch>
  </Router>
);
