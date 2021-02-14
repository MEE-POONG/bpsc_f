import moment from "moment";
import React, { useState, useEffect } from "react";
import { Container, Card, Modal, Row, Col, Media } from "react-bootstrap";
import { faClock, faEye, faMapMarkerAlt, faLocationArrow, faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <Container className="pt-5">
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
            <Card.Subtitle bsPrefix="view-all" style={{
              position: "absolute",
              right: "2rem",
              bottom: "100%"
            }}>View all Events</Card.Subtitle>
            <Card className="view my-3">
              <Row className="m-0">
                <Col xs="auto" lg="auto" className="date p-0">
                  <div className="start alone">
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
                <Col>
                  <Row>
                    <Col lg="6" className="d-flex">
                      <Media className="location align-self-center">
                        <FontAwesomeIcon className="mr-2 align-self-center" icon={faMapMarkerAlt} />
                        <Media.Body>
                          <span> building name</span>
                        </Media.Body>
                      </Media>
                    </Col>
                    <Col lg="6" >
                      <Media className="date-time align-self-center">
                        <FontAwesomeIcon className="mr-2 align-self-center" icon={faClock} />
                        <Media.Body>
                          <span>10.30 AM - 12.00 PM</span>
                          <span>2.00 PM - 3.30 PM</span>
                        </Media.Body>
                      </Media>
                    </Col>
                    <Col lg="12" xs="12" className="detail">
                      <Card.Title>
                        ProgrAm NAME
                      </Card.Title>
                      <Card.Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ...
                      </Card.Subtitle>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card className="view my-3">
              <Row className="m-0">
                <Col xs="auto" lg="auto" className="date p-0">
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
                <Col>
                  <Row>
                    <Col lg="6" className="d-flex">
                      <Media className="location align-self-center">
                        <FontAwesomeIcon className="mr-2 align-self-center" icon={faMapMarkerAlt} />
                        <Media.Body>
                          <span> building name</span>
                        </Media.Body>
                      </Media>
                    </Col>
                    <Col lg="6" >
                      <Media className="date-time align-self-center">
                        <FontAwesomeIcon className="mr-2 align-self-center" icon={faClock} />
                        <Media.Body>
                          <span>10.30 AM - 12.00 PM</span>
                          <span></span>
                        </Media.Body>
                      </Media>
                    </Col>
                    <Col lg="12" xs="12" className="detail">
                      <Card.Title>
                        ProgrAm NAME
                      </Card.Title>
                      <Card.Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ...
                      </Card.Subtitle>
                    </Col>
                  </Row>
                </Col>
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
