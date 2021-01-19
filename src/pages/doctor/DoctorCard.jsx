
import React from "react";
import { Container, Card, Row, Col, Image, Pagination } from "react-bootstrap";
const DoctorCard = () => {
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
    </Container>
  );
}

export default DoctorCard;
