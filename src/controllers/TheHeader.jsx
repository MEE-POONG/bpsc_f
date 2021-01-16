import React, { Component } from "react";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
// import routes from '../routes'

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
              <Nav.Link href="/#home">HOME</Nav.Link>
              <Nav.Link href="/about">ABOUT US</Nav.Link>
              <Nav.Link href="#sharing">SHARING</Nav.Link>
              <Nav.Link href="#sharing">E-LEARNING</Nav.Link>
              <Nav.Link href="#doctors">DOCTORS</Nav.Link>
              <Button variant="success" className="nav-link">
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
export default TheHeader;
