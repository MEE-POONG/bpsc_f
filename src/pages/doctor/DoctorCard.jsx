import React, {useState, useEffect} from "react";
import {Container, Row, Col, Image, Pagination, Modal, Card} from "react-bootstrap";
import {API_GET_DOCTOR, IMAGE_URL} from "../../apis";

const DoctorCard = () => {
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowData = (id) => setShowData(id);
  const [page, setPage] = useState(1);

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    API_GET_DOCTOR(page).then((result) => {
      setDoctor(result?.data);
    });
  }, [page]);

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
          {page > 1 && <Pagination.First onClick={() => setPage(1)} />}
          {page > 1 && <Pagination.Prev onClick={() => setPage((e) => (e -= 1))} />}
          {page > 1 && (
            <Pagination.Item onClick={() => setPage((e) => (e -= 1))}>
              {page - 1}
            </Pagination.Item>
          )}
          {<Pagination.Item active>{page}</Pagination.Item>}
          {page < doctor?.totalPage && (
            <Pagination.Item onClick={() => setPage((e) => (e += 1))}>
              {page + 1}
            </Pagination.Item>
          )}
          {page < doctor?.totalPage && (
            <Pagination.Next onClick={() => setPage((e) => (e += 1))} />
          )}
          {page < doctor?.totalPage && (
            <Pagination.Last onClick={() => setPage(doctor?.totalPage)} />
          )}
        </Pagination>
      </div>
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
            <Col lg="6">
            <img className="view-img"
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
                  <Card.Title>{doctor?.data[showData].firstName} {doctor?.data[showData].lastName}</Card.Title>
                  {/* <Card.Subtitle>{doctor?.data[showData].lastName}</Card.Subtitle> */}
                  <Card.Text>{doctor?.data[showData].content}</Card.Text>
                  <Card.Text>TEL {doctor?.data[showData].phone}</Card.Text>
                  <Card.Text>{doctor?.data[showData].email}</Card.Text>
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
