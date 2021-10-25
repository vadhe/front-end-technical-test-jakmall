import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Delivery from "../pages/Delivery";
import Finish from "../pages/Finish";
import Payment from "../pages/Payment";
import React from "react";
import Step from "../components/Step";
import styled from "styled-components";

const LayoutStyled = styled.div`
  background-color: #fffae6;
  padding-top: 2rem;
  .wrap-step {
    display: none;
  }
  @media (min-width: 1024px) {
    .wrap-step {
      padding: 2rem;
      display: flex;
      justify-content: center;
    }
  }
`;
const ContainerStyled = styled.div`
  background-color: #fff;
  height: auto;
  padding: 1rem;
`;
const Layout = () => {
  return (
    <Router>
      <LayoutStyled>
        <div className="wrap-step">
          <Step />
          <Step />
          <Step />
        </div>
        <Switch>
          <ContainerStyled>
            <Route exact path="/">
              <Delivery />
            </Route>
            <Route path="/73">
              <Payment />
            </Route>
            <Route path="/finish">
              <Finish />
            </Route>
          </ContainerStyled>
        </Switch>
      </LayoutStyled>
    </Router>
  );
};

export default Layout;
