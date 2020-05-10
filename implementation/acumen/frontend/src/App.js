import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Stock, ImageAnalysis, AppBar } from "./components";

export const App = () => (
  <Router>
    <AppBar>
      <Switch>
        <Route path="/stock" exact>
          <Stock />
        </Route>
        <Route path="/image" exact>
          <ImageAnalysis />
        </Route>
      </Switch>
    </AppBar>
  </Router>
);
