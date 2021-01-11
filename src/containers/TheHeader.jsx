import React, { Component } from 'react'
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
// import routes from '../routes'

class TheHeader extends Component {
  render() {
    return (
      <>
        <Navbar variant="light" className="container-xl">
          {/* <Navbar bg="light" variant="light"> */}
          <Navbar.Brand href="#home">
            <Image
              alt=""
              src='image/BPSC.SVG'
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT US</Nav.Link>
            <Nav.Link href="#sharing">SHARING</Nav.Link>
            <Nav.Link href="#sharing">E-LEARNING</Nav.Link>
            <Nav.Link href="#doctors">DOCTORS</Nav.Link>
            <Button variant="success" className="nav-link">Login</Button>
          </Nav>
        </Navbar>
      </>
    )
  }
}
export default TheHeader;
