import React, { useState } from "react";
import { Modal, Button, Image, Row } from "react-bootstrap";
import { faBell, faCommentAlt, faFileDownload, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TheMotivational = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
<<<<<<< HEAD
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="motivation">
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faBell} className="icon-title" />การแจ้งเตือน</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="scroll">
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faCommentAlt} className="icon-btn" />
                            <span className="ml-3">15 ข้อความใหม่ ในแชร์ของคุณ</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faHeart} className="icon-btn" />
                            <span className="ml-3">27 ถูกใจแชร์ของคุณ</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faCommentAlt} className="icon-btn" />
                            <span className="ml-3">15 ข้อความใหม่ ในแชร์ของคุณ</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Row className="blue-green">
                        <span>OK</span>
                    </Row>
                </Modal.Footer>
            </Modal>
        </>
=======
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
              <Button variant="success" className="nav-link">
                LOGIN
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
>>>>>>> 8be09219e51a0358ba18751fc39a076c9001a0ed
    );
}
export default TheMotivational;
