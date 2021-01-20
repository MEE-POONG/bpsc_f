
import React,{useState} from "react";
import { Container, Row, Col, Image, Pagination, Modal, Button, Card, } from "react-bootstrap";
const GalleryAlbum = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="gallery-page text-uppercase">
      <Container className="title-album ">
        <Card.Body className="text-center">
          <Card.Title >
            Album Name
          </Card.Title>
          <Card.Text className="team-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore ...
          </Card.Text>
          <div className="btn-back mt-5">
            BAck to Gallery
          </div>
        </Card.Body>
        <Row>
          <Col lg="3">
            <Image src="image/image7.png" onClick={handleShow}/>
          </Col>
        </Row>
      </Container>
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
    </div>
  );
}

export default GalleryAlbum;
