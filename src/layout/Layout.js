import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Delivery from "../components/delivery/Delivery";
import Finish from "../components/finish/Finish";
import Payment from "../components/payment/Payment";
import React from "react";

const Layout = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Delivery />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/finish">
            <Finish />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
