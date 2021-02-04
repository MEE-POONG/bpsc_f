import React, {useState, useEffect} from "react";
import {Container, Row, Col, Image, Pagination, Modal, Card} from "react-bootstrap";
import {API_GET_DOCTOR, IMAGE_URL} from "../../apis";

const DoctorCard = () => {
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowData = (id) => setShowData(id);

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    API_GET_DOCTOR().then((result) => {
      setDoctor(result?.data);
    });
  }, []);

  return (
    <Container className="detail">
      <Row className="py-5">
        {doctor?.data?.map(
          ({id, firstName, lastName, email, phone, picture, content}, idx) => (
            <Col lg="4" md="4" sm="6" className="mb-5">
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
                <div className="profile-name">DR.{firstName}</div>
                <div className="profile-username">{email || "-"}</div>
                <div className="profile-tel">TEL {phone || "-"}</div>
              </div>
            </Col>
          )
        )}
      </Row>
      <div>
        <Pagination className="my-5" style={{float: "right"}}>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item active>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="d-flex justify-content-center"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg="6">
              <Image
                src={
                  doctor?.data[showData].picture
                    ? IMAGE_URL + doctor?.data[showData].picture
                    : "https://chiccarrent.com/files/images/default-placeholder.png"
                }
                alt={showData + 1}
              />
            </Col>
            <Col lg="6">
              <Card>
                <Card.Body>
                  <Card.Title>Dr.{doctor?.data[showData].firstName}</Card.Title>
                  <Card.Subtitle>{doctor?.data[showData].lastName}</Card.Subtitle>
                  <Card.Text>{doctor?.data[showData].content}</Card.Text>
                  <Card.Text>TEL {doctor?.data[showData].phone}</Card.Text>
                  <Card.Text>{doctor?.data[showData].email}</Card.Text>
                  {/* <Card.Text>Hospital</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default DoctorCard;
