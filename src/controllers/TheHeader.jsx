import React, { Component } from "react";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
// import routes from '../routes'
import { NavLink } from "react-router-dom";

class TheHeader extends Component {
  render() {
    return (
      <>
        <Navbar
          variant="light"
          className="container-xl"
          style={{ boxShadow: "none" }}
          expand="lg"
        >
          {/* <Navbar bg="light" variant="light"> */}
          <Navbar.Brand href="/">
            <Image
              alt=""
              src="image/header/Logo.png"
              width="100"
              className="d-inline-block align-tops"
              style={{ objectFit: "contain" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-center">
              <NavLink exact to="/" className="nav-link">
                HOME
              </NavLink>
              <NavLink to="/about" className="nav-link">
                ABOUT US
              </NavLink>
              <NavLink to="/sharing" className="nav-link">
                SHARING
              </NavLink>
              <NavLink to="/e-leaning" className="nav-link">
                E-LEARNING
              </NavLink>
              <NavLink to="/doctor" className="nav-link">
                DOCTORS
              </NavLink>
              <Button variant="success" className="nav-link">
                LOGIN
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
export default TheHeader;
