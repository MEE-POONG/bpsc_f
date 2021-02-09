import React, { useState, useEffect } from "react";
import { Container, Card, Button, Modal, Row, Col } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import { API_GET_DOCTOR, IMAGE_URL } from "../../apis";
import { useNavigate } from "react-router-dom";

const TeamMember = () => {
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowData = (id) => setShowData(id);
  const [doctor, setDoctor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API_GET_DOCTOR().then((result) => {
      setDoctor(result?.data);
    });
  }, []);

  return (
    <div className="team">
      <Container fluid className="py-5">
        <Card className="text-center ">
          <Card.Body className="text-uppercase">
            <Card.Subtitle className="text-uppercase">our team members</Card.Subtitle>
            <Card.Title className="">we have quality complete expert</Card.Title>
            <Card.Title className="team-subtitle">reviews in our program</Card.Title>
            <Card.Text className="team-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore ...
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container fluid>
        {doctor ? (
          <Swiper
            spaceBetween={50}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
          >
            {doctor?.data?.map(
              ({ id, firstName, lastName, email, phone, picture, content }, idx) => (
                <SwiperSlide key={idx}>
                  <div className="profile-card-2" onClick={() => {
                    handleShow();
                    // handleShowData(idx);
                  }}>
                    <img
                      className="img img-responsive"
                      src={
                        picture
                          ? IMAGE_URL + picture
                          : "https://chiccarrent.com/files/images/default-placeholder.png"
                      }
                      alt={id}
                    />
                    <div className="profile-name">
                      DR.{firstName}
                      {/* {lastName} */}
                    </div>
                    <div className="profile-username">{email}</div>
                    <div className="profile-tel">TEL {phone || "-"}</div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        ) : null}
        <div className="text-center my-5" onClick={() => navigate("/doctor/")}>
          <Button>MODE DOCTORS</Button>
        </div>
      </Container>
      <Modal show={show}
        onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg="6">
              {/* <img className="view-img"
                src={
                  doctor?.data[showData].picture
                    ? IMAGE_URL + doctor?.data[showData].picture
                    : "https://chiccarrent.com/files/images/default-placeholder.png"
                }
                alt={showData + 1}
              /> */}
            </Col>
            <Col lg="6">
              <Card>
                <Card.Body>
                  {/* <Card.Title>Dr.{doctor?.data[showData].firstName}</Card.Title>
                  <Card.Subtitle>{doctor?.data[showData].lastName}</Card.Subtitle>
                  <Card.Text>{doctor?.data[showData].content}</Card.Text>
                  <Card.Text>TEL {doctor?.data[showData].phone}</Card.Text>
                  <Card.Text>{doctor?.data[showData].email}</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TeamMember;
