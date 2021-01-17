import React from "react";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
// import routes from '../routes'
import { NavLink, useNavigate } from "react-router-dom";

const TheHeader = ()=> {

  let navigate = useNavigate();

    return (
      <>
        <Navbar
          variant="light"
          className="container-xl py-5"
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
              <NavLink to="/" className="nav-link">
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
              <Button variant="success" className="nav-link" onClick={() => navigate('/profile')}>
                LOGIN
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
}
export default TheHeader;
