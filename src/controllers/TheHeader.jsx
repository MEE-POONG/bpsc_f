import React,{useState} from "react";
import { Navbar, Nav, Button, Image, Card, Modal, Row, Col } from "react-bootstrap";
// import routes from '../routes'
import { NavLink, useNavigate } from "react-router-dom";
import TheMotivational from "./TheMotivational";

const TheHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Button variant="success" className="nav-link" onClick={handleShow}>
              LOGIN
              </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <TheMotivational />
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="d-flex justify-content-center">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Row className="">
            <Col lg="6">
              <Image src="image/home/home1.png" />
            </Col>
            <Col lg="6">
              <Card>
                <Card.Body>
                  <Card.Title>
                    Dr.Name
                  </Card.Title>
                  <Card.Subtitle>
                    cardiothoracic surgeon
                  </Card.Subtitle>
                  <Card.Text>
                    ประวัติโดยย่อ เคยทำงานที่ไหน
                    ติดต่อ
                    TEL +666 666 6666
                    Email
                  </Card.Text>
                  <Card.Text>
                    TEL +666 666 6666
                  </Card.Text>
                  <Card.Text>
                    Email
                  </Card.Text>
                  <Card.Text>
                    Hospital
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default TheHeader;
