import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Orders from "./pages/orders";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/pedidos" component={Orders}></Route>
      </Switch>
    </Router>
  );
}

export default Routes;
