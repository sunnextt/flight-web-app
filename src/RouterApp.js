import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Contacts from "./Contacts";
import About from "./About";
import Home from "./Home"

function RouterApp() {
    return (
      <Router>
        <div>
          <Navbar className="navbar_logo">
            <a className="navbarlogo" href="#AVIATION">
              <ion-icon name="airplane"></ion-icon>AVIATION
            </a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link>
                  <Link to="./">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="./about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="./contacts">Contacts</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}


export default RouterApp




