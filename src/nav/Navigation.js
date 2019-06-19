import React from "react";
import {
    Navbar,
    Nav
} from "react-bootstrap";
import {Link} from "react-router-dom";
import NavBrand from "./NavBrand";

function Navigation() {
    return(
        <div>
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand as={Link} to="/" >
                <NavBrand />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/team">Officers</Nav.Link>
                    <Nav.Link as={Link} to="/events">Events</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/learn">Learn</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default Navigation;
