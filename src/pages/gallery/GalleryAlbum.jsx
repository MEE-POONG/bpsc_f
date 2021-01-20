import React, {useState} from "react";
import {Container, Row, Col, Image, Modal, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
const GalleryAlbum = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  return (
    <div className="gallery-page text-uppercase">
      <Container className="title-album ">
        <Card.Body className="text-center">
          <Card.Title>Album Name</Card.Title>
          <Card.Text className="team-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore ...
          </Card.Text>
          <div className="btn-back mt-5" onClick={() => navigate("/gallery")}>
            BAck to Gallery
          </div>
        </Card.Body>
        <Row>
          <Col lg="3">
            <Image src="/image/image7.png" onClick={handleShow} />
          </Col>
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="d-flex justify-content-center"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Image src="/image/home/home1.png" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GalleryAlbum;
