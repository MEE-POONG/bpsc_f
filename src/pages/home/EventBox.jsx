import moment from "moment";
import React, { useState, useEffect } from "react";
import { Container, Card, Modal, Row, Col } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

import { API_GET_EVENT } from "../../apis";

const EventBox = () => {
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowData = (id) => setShowData(id);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    API_GET_EVENT().then((result) => {
      setEvent(result?.data);
    });
  }, []);

  return (
    <div className="home-event text-uppercase">
      <Container>
        <div className="text-left text-uppercase">
          <Card.Title>Up coming events</Card.Title>
        </div>
        <div className="m-0 my-5 card-day">
          {event ? (
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
              {event?.data?.map(
                ({ id, title, content, location, time, eventStart, eventEnd }, idx) => (
                  <SwiperSlide>
                    <div>
                      <Card
                        className={`bg-${idx > 3 ? 4 : idx + 1} height-293`}
                        onClick={() => {
                          handleShow();
                          handleShowData(idx);
                        }}
                      >
                        <Card.Body>
                          <Card.Title>{moment(eventStart).format("DD")}</Card.Title>
                          <Card.Subtitle>
                            {moment(eventStart).format("MMM")}
                          </Card.Subtitle>
                          <Card.Text className="text-overflow-5">
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle>{content}</Card.Subtitle>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          ) : null}
        </div>
        <Row>
          <Col lg="6" md="6" sm="6" xs="12">
            <Card.Title>Up coming events</Card.Title>
          </Col>
          <Col lg="6" md="6" sm="6" xs="12">
            {/* เว้นไว้ */}
          </Col>
          <Col lg="6" md="6" sm="6" xs="12">
            {/* เว้นไว้ */}
          </Col>
          <Col lg="6" md="6" sm="6" xs="12" style={{ position: "relative" }}>
            <Card.Subtitle style={{
              position: "absolute",
              right: "2rem",
              bottom: "100%"
            }}>View all Events</Card.Subtitle>
            <Card className="view">
              <Row>
                <Col className="date">
                  <div className="start">
                    <Card.Title>
                      19
                    </Card.Title>
                    <Card.Subtitle>
                      FEB
                    </Card.Subtitle>
                  </div>
                  <div className="end d-none">
                    <Card.Title>
                      2
                    </Card.Title>
                    <Card.Subtitle>
                      MAR
                    </Card.Subtitle>
                  </div>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Card>
            <Card className="view">
              <Row>
                <Col className="date">
                  <div className="start">
                    <Card.Title>
                      19
                    </Card.Title>
                    <Card.Subtitle>
                      FEB
                    </Card.Subtitle>
                  </div>
                  <div className="end">
                    <Card.Title>
                      2
                    </Card.Title>
                    <Card.Subtitle>
                      MAR
                    </Card.Subtitle>
                  </div>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Card.Body>
            <Card.Title><h2>{event?.data[showData].title}</h2></Card.Title>
            <Card.Subtitle><h3>{event?.data[showData].content}</h3></Card.Subtitle>
          </Card.Body>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EventBox;
