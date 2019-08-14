import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Recycle from "./pages/recycle";

import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recycle" component={Recycle} />
         
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
