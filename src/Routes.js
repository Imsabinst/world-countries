import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Country from "./components/country";
import Header from "./components/header";
import Home from "./pages/home";

export const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/country/:countryName" exact component={Country} />
      </Switch>
    </Router>
  );
};
