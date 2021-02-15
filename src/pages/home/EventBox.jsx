import React, { useState, useEffect } from "react";
import { Button, Container, Card, Modal, Row, Col, Media } from "react-bootstrap";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EventBox = () => {
  const [showEventAll, setShowEventAll] = useState(false);
  const handleClose = () => setShowEventAll(false);
  const handleShow = () => setShowEventAll(true);

  return (
    <div className="home-event text-uppercase">
      <Container className="py-5">
        <Row>
          <Col lg="6" md="6" sm="12" xs="12">
            <Card.Title>Up coming events</Card.Title>
            <Card.Title bsPrefix="view-all-2" onClick={handleShow} style={{
            }}>View all Events</Card.Title>
          </Col>
          <Col lg="6" md="6" sm="6" xs="12">
            {/* เว้นไว้ */}
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <Card className="view frist">
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
                    <Col lg="12" className="d-flex">
                      <Media className="location align-self-center">
                        <FontAwesomeIcon className="mr-2 fas align-self-center" icon={faMapMarkerAlt} />
                        <Media.Body>
                          <div>Room 257,  building name BAngkapi bangkok</div>
                        </Media.Body>
                      </Media>
                    </Col>
                    <Col lg="12" className="detail" >
                      <Media className="date-time align-self-center">
                        <FontAwesomeIcon className="mr-2 fas align-self-center" icon={faClock} />
                        <Media.Body>
                          <div>10.30 AM - 12.00 PM</div>
                          <div></div>
                        </Media.Body>
                      </Media>
                    </Col>
                  </Row>
                </Col>
                <Col lg="12" xs="12" className="f-detail">
                  <Card.Title>
                    ProgrAm NAME
                      </Card.Title>
                  <Card.Subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ...
                      </Card.Subtitle>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="6" xs="12" style={{ position: "relative" }} className="d-md-block d-sm-none d-xs-none">
            <Card.Subtitle bsPrefix="view-all" onClick={handleShow} style={{
              position: "absolute",
              right: "2rem",
              bottom: "100%"
            }}>View all Events</Card.Subtitle>
            <Card className="view start">
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
                        <FontAwesomeIcon className="mr-2 fas align-self-center" icon={faMapMarkerAlt} />
                        <Media.Body>
                          <div> building name</div>
                        </Media.Body>
                      </Media>
                    </Col>
                    <Col lg="6" >
                      <Media className="date-time align-self-center">
                        <FontAwesomeIcon className="mr-2 fas align-self-center" icon={faClock} />
                        <Media.Body>
                          <div>10.30 AM - 12.00 PM</div>
                          <div>2.00 PM - 3.30 PM</div>
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
            <Card className="view end">
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
                        <FontAwesomeIcon className="mr-2 fas align-self-center" icon={faMapMarkerAlt} />
                        <Media.Body>
                          <div> building name</div>
                        </Media.Body>
                      </Media>
                    </Col>
                    <Col lg="6" >
                      <Media className="date-time align-self-center">
                        <FontAwesomeIcon className="mr-2 fas align-self-center" icon={faClock} />
                        <Media.Body>
                          <div>10.30 AM - 12.00 PM</div>
                          <div></div>
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
      <Modal
        show={showEventAll}
        onHide={handleClose}
        // backdrop="static"
        // keyboard={false}
        centered
        size="lg"
        className="home-event-list"
      >
        <Modal.Header>
          <Modal.Title bsPrefix="f-gradient">EVENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mx-2">
            <Col xs="6" lg="6">
              <Card className="view start">
                <Row className="m-0 meat-blue">
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
                      <Col lg="12" className="d-flex">
                        <Media className="location align-self-center">
                          <FontAwesomeIcon className="mr-2 fas align-self-center" icon={faMapMarkerAlt} />
                          <Media.Body>
                            <div> building name</div>
                          </Media.Body>
                        </Media>
                      </Col>
                      <Col lg="12" className="f-detail">
                        <Media className="date-time align-self-center">
                          <FontAwesomeIcon className="mr-2 fas align-self-center" icon={faClock} />
                          <Media.Body>
                            <div>10.30 AM - 12.00 PM</div>
                            <div>2.00 PM - 3.30 PM</div>
                          </Media.Body>
                        </Media>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" xs="12" className="detail set-margin">
                    <Card.Title>
                      ProgrAm NAME
                      </Card.Title>
                    <Card.Subtitle>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ...
                      </Card.Subtitle>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs="6" lg="6">
              <Card className="view">
                <Row className="m-0 meat-blue">
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
                      <Col lg="12" className="d-flex">
                        <Media className="location align-self-center">
                          <FontAwesomeIcon className="mr-2 fas align-self-center" icon={faMapMarkerAlt} />
                          <Media.Body>
                            <div> building name</div>
                          </Media.Body>
                        </Media>
                      </Col>
                      <Col lg="12" className="f-detail">
                        <Media className="date-time align-self-center">
                          <FontAwesomeIcon className="mr-2 fas align-self-center" icon={faClock} />
                          <Media.Body>
                            <div>10.30 AM - 12.00 PM</div>
                            <div></div>
                          </Media.Body>
                        </Media>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" xs="12" className="detail set-margin" >
                    <Card.Title>
                      ProgrAm NAME
                      </Card.Title>
                    <Card.Subtitle>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ...
                      </Card.Subtitle>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            BACK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EventBox;
