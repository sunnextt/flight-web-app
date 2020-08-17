import React from 'react';

import { Nav, Navbar , Container} from 'react-bootstrap'
// import logo from "../assets/flight-logo.jpg"


export const NavigationBar = () => (
        <Navbar className="nav-background" expand="lg">
            <Container>
            <Navbar.Brand className="nav-logo" href="/">AVIATION</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className = "ml-auto nav-linke" >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contacts">Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
)