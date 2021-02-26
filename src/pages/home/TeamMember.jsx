import React, {useState, useEffect} from "react";
import {Container, Card, Button, Modal, Row, Col} from "react-bootstrap";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import {API_GET_DOCTOR, IMAGE_URL} from "../../apis";
import {useNavigate} from "react-router-dom";

const TeamMember = () => {
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowData = (id) => setShowData(id);
  const [doctor, setDoctor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API_GET_DOCTOR("", 1, 10).then((result) => {
      setDoctor(result?.data);
    });
  }, []);

  return (
    <div className="team">
      <Container fluid className="py-5">
        <Card className="text-center ">
          <Card.Body className="">
            <Card.Title className="text-uppercase fw-bold">INFLUENCER</Card.Title>
            <Card.Text className="team-subtitle fw-bold">Teamwork makes dream work</Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container fluid>
        {doctor ? (
          <Swiper
            // autoplay={1000}
            // slidesPerView={"auto"}
            // loop={true}
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
                slidesPerView: 3,
              },
            }}
          >
            {doctor?.data?.map(
              ({id, firstName, lastName, email, phone, picture, content}, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="profile-card-2"
                    onClick={() => {
                      handleShow();
                      handleShowData(idx);
                    }}
                  >
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
                      {firstName}
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
          <Button>MORE DOCTORS</Button>
        </div>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="d-flex justify-content-center doctor-page"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col
              lg="6"
              style={{
                textAlign: "center",
              }}
            >
              <img
                className="view-img"
                src={
                  doctor?.data[showData].picture
                    ? IMAGE_URL + doctor?.data[showData].picture
                    : "https://chiccarrent.com/files/images/default-placeholder.png"
                }
                alt={showData + 1}
              />
            </Col>
            <Col lg="6">
              {/* <Card> */}
              <Card.Body>
                <Card.Title>
                  <h1>
                    {doctor?.data[showData].firstName} {doctor?.data[showData].lastName}
                  </h1>
                </Card.Title>
                {/* <Card.Subtitle>{doctor?.data[showData].lastName}</Card.Subtitle> */}
                <Card.Text>
                  <h4>{doctor?.data[showData].content}</h4>
                </Card.Text>
                <Card.Text>
                  <h4>
                    {doctor?.data[showData].phone && "TEL"} {doctor?.data[showData].phone}
                  </h4>
                </Card.Text>
                <Card.Text>
                  <h4>{doctor?.data[showData].email}</h4>
                </Card.Text>
                <Card.Text>
                  <h4>{doctor?.data[showData].hospital}</h4>
                </Card.Text>
              </Card.Body>
              <Card.Footer
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor: "white",
                }}
              >
                <button
                  type="button"
                  className="btn btn-success about-talk-with-us-btn-success"
                  onClick={() => navigate("/ContactDoctor/" + doctor?.data[showData].id)}
                >
                  CONTACT DOCTOR
                </button>
              </Card.Footer>
              {/* </Card> */}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TeamMember;
