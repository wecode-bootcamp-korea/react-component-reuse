import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Kakao from "./Pages/Kakao/CardList";
import Watcha from "./Pages/Watcha/Modal";
import ChildrenTest from "./Pages/Watcha/Components/ChildrenTest";

const Examples = () => (
  <Router>
    <Switch>
      <Route exact path="/kakao" component={Kakao} />
      <Route path="/watcha" component={Watcha} />
      <Route path="/children" component={ChildrenTest} />
    </Switch>
  </Router>
);

export default Examples;
