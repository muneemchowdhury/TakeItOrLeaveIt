import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Recycle from "./pages/recycle";
import Items from "./pages/items";
import Home from "./pages/home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        
          <Route exact path="/" component={Home}/>
          <Route path="/recycle" component={Recycle} />
          <Route path="/items" component={Items} />
          
         
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
