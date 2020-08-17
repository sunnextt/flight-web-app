import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Contacts } from "./Contacts";
import { About } from "./About";
import { NoMatch } from "./NoMatch";
import { NavigationBar } from "./components/NavigationBar";
import { Details } from "./components/Details";
import RapidApi from "./RapidApi"

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Details />
      <RapidApi />
    </React.Fragment>
  );
}

export default App;
