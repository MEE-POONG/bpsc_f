
import React, { useState } from "react";
import { Container, Row, Col, Image, Pagination, Modal, Button, Card, } from "react-bootstrap";
const DoctorCard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="detail">
      <Row className="py-5">
        <Col lg="3" md="4" sm="6" className="mb-5">
          <div className="profile-card-2">
            <img
              className="img img-responsive"
              src="/image/image24.png"
              alt=""
            />
            <div className="profile-name">DR.YONG PAL</div>
            <div className="profile-username">CARDIOTHORACIC SURGEON</div>
            <div className="profile-tel">TEL +666 666 6666</div>
          </div>
        </Col>
        <Col lg="3" md="4" sm="6" className="mb-5">
          <div className="profile-card-2">
            <img
              className="img img-responsive"
              src="/image/image24.png"
              alt=""
            />
            <div className="profile-name">DR.YONG PAL</div>
            <div className="profile-username">CARDIOTHORACIC SURGEON</div>
            <div className="profile-tel">TEL +666 666 6666</div>
          </div>
        </Col>
        <Col lg="3" md="4" sm="6" className="mb-5">
          <div className="profile-card-2">
            <img
              className="img img-responsive"
              src="/image/image24.png"
              alt=""
            />
            <div className="profile-name">DR.YONG PAL</div>
            <div className="profile-username">CARDIOTHORACIC SURGEON</div>
            <div className="profile-tel">TEL +666 666 6666</div>
          </div>
        </Col>
        <Col lg="3" md="4" sm="6" className="mb-5">
          <div className="profile-card-2">
            <img
              className="img img-responsive"
              src="/image/image24.png"
              alt=""
            />
            <div className="profile-name">DR.YONG PAL</div>
            <div className="profile-username">CARDIOTHORACIC SURGEON</div>
            <div className="profile-tel">TEL +666 666 6666</div>
          </div>
        </Col>
        <Col lg="3" md="4" sm="6" className="mb-5">
          <div className="profile-card-2">
            <img
              className="img img-responsive"
              src="/image/image24.png"
              alt=""
            />
            <div className="profile-name">DR.YONG PAL</div>
            <div className="profile-username">CARDIOTHORACIC SURGEON</div>
            <div className="profile-tel">TEL +666 666 6666</div>
          </div>
        </Col>
      </Row>
      <div>
        <Pagination className="my-5" style={{ float: "right" }}>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item active>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
            </Button>
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
    </Container>
  );
}

export default DoctorCard;
