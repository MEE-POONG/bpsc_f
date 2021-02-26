import React, {useState, useEffect} from "react";
import {Button, Container, Card, Modal, Row, Col, Media} from "react-bootstrap";
import {faClock, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {API_GET_EVENT} from "../../apis";
import moment from "moment";
import {useNavigate} from "react-router-dom";

const EventBox = () => {
  const navigate = useNavigate();

  const [showEventAll, setShowEventAll] = useState(false);
  const handleClose = () => setShowEventAll(false);
  const handleShow = () => setShowEventAll(true);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    API_GET_EVENT(page, 1000).then((result) => {
      setData(result?.data);
    });
  }, [page]);

  return (
    <div className="home-event text-uppercase">
      <Container className="py-5">
        <Row>
          <Col lg="6" md="6" sm="12" xs="12">
            <Card.Title>Up coming events</Card.Title>
            <Card.Title
              bsPrefix="view-all-2"
              onClick={handleShow}
              style={{cursor: "pointer"}}
            >
              View all Events
            </Card.Title>
          </Col>
          <Col lg="6" md="6" sm="6" xs="12">
            {/* เว้นไว้ */}
          </Col>
          {data?.data?.length > 0 ? (
            <Col lg="6" md="6" sm="12" xs="12">
              <Card className="view frist">
                <Row className="m-0">
                  <Col xs="auto" lg="auto" className="date p-0">
                    <div
                      className={`start ${
                        data?.data[0]?.eventStart !== data?.data[0]?.eventEnd
                          ? ""
                          : "alone"
                      }`}
                    >
                      <Card.Title>
                        {moment(data?.data[0]?.eventStart).format("D")}
                      </Card.Title>
                      <Card.Subtitle>
                        {moment(data?.data[0]?.eventStart).format("MMM")}
                      </Card.Subtitle>
                    </div>
                    <div
                      className={`end ${
                        data?.data[0]?.eventStart !== data?.data[0]?.eventEnd
                          ? ""
                          : "d-none"
                      }`}
                    >
                      <Card.Title>
                        {moment(data?.data[0]?.eventEnd).format("D")}
                      </Card.Title>
                      <Card.Subtitle>
                        {moment(data?.data[0]?.eventEnd).format("MMM")}
                      </Card.Subtitle>
                    </div>
                  </Col>
                  <Col>
                    <Row>
                      <Col lg="12" className="d-flex">
                        <Media className="location align-self-center">
                          <FontAwesomeIcon
                            className="mr-2 fas align-self-center"
                            icon={faMapMarkerAlt}
                          />
                          <Media.Body>
                            <div>{data?.data[0]?.location || "-"}</div>
                          </Media.Body>
                        </Media>
                      </Col>
                      <Col lg="12" className="detail">
                        <Media className="date-time align-self-center">
                          <FontAwesomeIcon
                            className="mr-2 fas align-self-center"
                            icon={faClock}
                          />
                          <Media.Body>
                            <div>{data?.data[0]?.time || "-"}</div>
                            <div></div>
                          </Media.Body>
                        </Media>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="12" xs="12" className="f-detail">
                    <Card.Title>{data?.data[0]?.title}</Card.Title>
                    <Card.Subtitle>{data?.data[0]?.content}</Card.Subtitle>
                  </Col>
                </Row>
              </Card>
            </Col>
          ) : null}
          <Col
            lg="6"
            md="6"
            sm="12"
            xs="12"
            style={{position: "relative"}}
            className="d-none d-md-block d-lg-block"
          >
            <Card.Subtitle
              bsPrefix="view-all"
              onClick={handleShow}
              style={{
                position: "absolute",
                right: "2rem",
                bottom: "100%",
                cursor: "pointer",
              }}
            >
              View all Events
            </Card.Subtitle>
            {data?.data?.length > 1 ? (
              <Card className="view start">
                <Row className="m-0">
                  <Col xs="auto" lg="auto" className="date p-0">
                    <div
                      className={`start ${
                        data?.data[1]?.eventStart !== data?.data[1]?.eventEnd
                          ? ""
                          : "alone"
                      }`}
                    >
                      <Card.Title>
                        {moment(data?.data[1]?.eventStart).format("D")}
                      </Card.Title>
                      <Card.Subtitle>
                        {moment(data?.data[1]?.eventStart).format("MMM")}
                      </Card.Subtitle>
                    </div>
                    <div
                      className={`end ${
                        data?.data[1]?.eventStart !== data?.data[1]?.eventEnd
                          ? ""
                          : "d-none"
                      }`}
                    >
                      <Card.Title>
                        {moment(data?.data[1]?.eventEnd).format("D")}
                      </Card.Title>
                      <Card.Subtitle>
                        {moment(data?.data[1]?.eventEnd).format("MMM")}
                      </Card.Subtitle>
                    </div>
                  </Col>
                  <Col>
                    <Row>
                      <Col lg="6" className="d-flex">
                        <Media className="location align-self-center">
                          <FontAwesomeIcon
                            className="mr-2 fas align-self-center"
                            icon={faMapMarkerAlt}
                          />
                          <Media.Body>
                            <div>{data?.data[1]?.location || "-"}</div>
                          </Media.Body>
                        </Media>
                      </Col>
                      <Col lg="6">
                        <Media className="date-time align-self-center">
                          <FontAwesomeIcon
                            className="mr-2 fas align-self-center"
                            icon={faClock}
                          />
                          <Media.Body>
                            <div>{data?.data[1]?.time || "-"}</div>
                          </Media.Body>
                        </Media>
                      </Col>
                      <Col lg="12" xs="12" className="detail">
                        <Card.Title>{data?.data[1]?.title}</Card.Title>
                        <Card.Subtitle>{data?.data[1]?.content}</Card.Subtitle>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            ) : null}
            {data?.data?.length > 2 ? (
              <Card className="view end">
                <Row className="m-0">
                  <Col xs="auto" lg="auto" className="date p-0">
                    <div
                      className={`start ${
                        data?.data[2]?.eventStart !== data?.data[2]?.eventEnd
                          ? ""
                          : "alone"
                      }`}
                    >
                      <Card.Title>
                        {moment(data?.data[2]?.eventStart).format("D")}
                      </Card.Title>
                      <Card.Subtitle>
                        {moment(data?.data[2]?.eventStart).format("MMM")}
                      </Card.Subtitle>
                    </div>
                    <div
                      className={`end ${
                        data?.data[2]?.eventStart !== data?.data[2]?.eventEnd
                          ? ""
                          : "d-none"
                      }`}
                    >
                      <Card.Title>
                        {moment(data?.data[2]?.eventEnd).format("D")}
                      </Card.Title>
                      <Card.Subtitle>
                        {moment(data?.data[2]?.eventEnd).format("MMM")}
                      </Card.Subtitle>
                    </div>
                  </Col>
                  <Col>
                    <Row>
                      <Col lg="6" className="d-flex">
                        <Media className="location align-self-center">
                          <FontAwesomeIcon
                            className="mr-2 fas align-self-center"
                            icon={faMapMarkerAlt}
                          />
                          <Media.Body>
                            <div>{data?.data[2]?.location || "-"}</div>
                          </Media.Body>
                        </Media>
                      </Col>
                      <Col lg="6">
                        <Media className="date-time align-self-center">
                          <FontAwesomeIcon
                            className="mr-2 fas align-self-center"
                            icon={faClock}
                          />
                          <Media.Body>
                            <div>{data?.data[2]?.time || "-"}</div>
                          </Media.Body>
                        </Media>
                      </Col>
                      <Col lg="12" xs="12" className="detail">
                        <Card.Title>{data?.data[2]?.title}</Card.Title>
                        <Card.Subtitle>{data?.data[2]?.content}</Card.Subtitle>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            ) : null}
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
            {data?.data?.map((e) => (
              <Col
                xs="12"
                lg="6"
                onClick={() =>
                  +localStorage.getItem("isAdmin") === 1
                    ? navigate(`edit-event/${e?.id}`)
                    : null
                }
              >
                <Card className="view start">
                  <Row className="m-0 meat-blue">
                    <Col xs="auto" lg="auto" className="date p-0">
                      <div
                        className={`start ${
                          e?.eventStart !== e?.eventEnd ? "" : "alone"
                        }`}
                      >
                        <Card.Title>{moment(e?.eventStart).format("D")}</Card.Title>
                        <Card.Subtitle>
                          {moment(e?.eventStart).format("MMM")}
                        </Card.Subtitle>
                      </div>
                      <div
                        className={`end ${e?.eventStart !== e?.eventEnd ? "" : "d-none"}`}
                      >
                        <Card.Title>{moment(e?.eventEnd).format("D")}</Card.Title>
                        <Card.Subtitle>{moment(e?.eventEnd).format("MMM")}</Card.Subtitle>
                      </div>
                    </Col>
                    <Col>
                      <Row>
                        <Col lg="12" className="d-flex">
                          <Media className="location align-self-center">
                            <FontAwesomeIcon
                              className="mr-2 fas align-self-center"
                              icon={faMapMarkerAlt}
                            />
                            <Media.Body>
                              <div>{e?.location || "-"}</div>
                            </Media.Body>
                          </Media>
                        </Col>
                        <Col lg="12" className="f-detail">
                          <Media className="date-time align-self-center">
                            <FontAwesomeIcon
                              className="mr-2 fas align-self-center"
                              icon={faClock}
                            />
                            <Media.Body>
                              <div>{e?.time || "-"}</div>
                            </Media.Body>
                          </Media>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Col lg="12" xs="12" className="detail set-margin pl-0">
                    <Card.Title>{e?.title}</Card.Title>
                    <Card.Subtitle>{e?.content}</Card.Subtitle>
                  </Col>
                </Card>
              </Col>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btn btn-success" onClick={handleClose}>
            BACK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EventBox;
