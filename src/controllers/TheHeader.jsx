import React,{useState} from "react";
import { Navbar, Nav, Button, Image, Card, Modal, Row, Col } from "react-bootstrap";
// import routes from '../routes'
import { NavLink, useNavigate } from "react-router-dom";
import Notification from "./TheNotification";
import TheLogin from "./TheLogin";

const TheHeader = () => {
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
          <Nav className="ml-auto text-center align-items-center text-nowrap">
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
            {sessionStorage.getItem("BPSC_USER_LOGIN") === "true" ? (
              <div class="row">
              <div class="col-sm-2">
                <div class="nav-item">
                  <a href={() => {}}>
                    <span class="notify-badge">NEW</span>
                    <img
                      src="http://placehold.it/200x200"
                      alt=""
                      width="50px"
                      height="50px"
                      style={{borderRadius: '50%'}}
                    />
                  </a>
                </div>
                </div>
              </div>
            ) : (
              <TheLogin />
            )}
              {/* <Button
                variant="success"
                className="nav-link"
                onClick={() => {
                  sessionStorage.setItem("BPSC_USER_LOGIN", true);
                  console.log(sessionStorage.getItem("BPSC_USER_LOGIN"));
                  navigate("/profile");
                }}
              >
                LOGIN
              </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Notification />
    </>
  );
};
export default TheHeader;
