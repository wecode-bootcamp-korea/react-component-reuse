import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Kakao from "./Pages/Kakao/CardList";
import Watcha from "./Pages/Watcha/Modal";

const Examples = () => (
  <Router>
    <Switch>
      <Route exact path="/kakao" component={Kakao} />
      <Route path="/watcha" component={Watcha} />
    </Switch>
  </Router>
);

export default Examples;
