import React, {useState, useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Pagination,
  InputGroup,
  FormControl,
  Modal,
  Card,
  Button,
} from "react-bootstrap";
import {
  API_GET_DOCTOR,
  API_DEL_DOCTOR_BY_ID,
  IMAGE_URL,
  API_GET_RANDOMPROTOTYPEHOSPITALTAG,
} from "../../apis";
import {useNavigate} from "react-router-dom";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import Swal from "sweetalert2";

const DoctorCard = () => {
  const [sharingRandomTag, setSharingRandomTag] = useState("");
  const [sharingRandom, setSharingRandom] = useState(null);

  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowData = (id) => setShowData(id);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    API_GET_RANDOMPROTOTYPEHOSPITALTAG().then((result) => {
      setSharingRandom(result?.data);
    });
  }, []);

  useEffect(() => {
    API_GET_DOCTOR(search, page, "12", sharingRandomTag || undefined).then((result) => {
      setDoctor(result?.data);
    });
    console.log(search, page, sharingRandomTag);
  }, [search, page, sharingRandomTag]);

  const handleDel = (id) => {
    Swal.fire("Are you sure!", "ต้องการลบใช่ไหม!", "info").then((result) => {
      if (result.isConfirmed) {
        API_DEL_DOCTOR_BY_ID(id).then(() => navigate(0));
      }
    });
  };
  return (
    <div>
      <Container className="title mb-5">
        <Row>
          <Col lg="8">
            <Card.Title>Doctor</Card.Title>
          </Col>
          {/* <Col lg="4" className="align-self-center">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text variant="outline-secondary" id="basic-addon1">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Search..."
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </InputGroup>
          </Col> */}
        </Row>
      </Container>

      <Container className="detail pb-5">
        {sharingRandom?.tags?.map(({tag}) => (
          <Button
            variant="outline-primary"
            className={`text-custom-tag outline-primary ${
              tag === sharingRandomTag ? "active" : ""
            }`}
            onClick={() => {
              setSharingRandomTag(tag);
              setPage(1);
            }}
          >
            {tag}
          </Button>
        ))}
        <Button
          variant="outline-primary"
          className="text-custom-tag outline-primary"
          onClick={() => {
            setSharingRandomTag("");
            setPage(1);
          }}
        >
          CLEAR
        </Button>
      </Container>

      <Container className="detail">
        <Row>
          <Col xs="12" lg="12">
            <Card.Subtitle className="scroll">
              {sharingRandomTag ? " Search by tag " + sharingRandomTag : ""}
            </Card.Subtitle>
          </Col>
        </Row>{" "}
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
                  <div className="profile-name">{firstName}</div>
                  <div className="profile-username">{email || "-"}</div>
                  <div className="profile-tel">TEL {phone || "-"}</div>
                </div>
              </Col>
            )
          )}
        </Row>
        <div>
          {doctor?.totalPage > 1 ? (
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
          ) : null}
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
              <Col
                lg="6"
                style={{
                  textAlign: "center",
                }}
              >
                <img
                  className="view-img"
                  src={
                    doctor?.data[showData]?.picture
                      ? IMAGE_URL + doctor?.data[showData]?.picture
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
                      {doctor?.data[showData]?.firstName}{" "}
                      {doctor?.data[showData]?.lastName}
                    </h1>
                  </Card.Title>
                  {/* <Card.Subtitle>{doctor?.data[showData]?.lastName}</Card.Subtitle> */}
                  <Card.Text>
                    <h4>{doctor?.data[showData]?.content}</h4>
                  </Card.Text>
                  <Card.Text>
                    <h4>
                      {doctor?.data[showData]?.phone && "TEL"}{" "}
                      {doctor?.data[showData]?.phone}
                    </h4>
                  </Card.Text>
                  <Card.Text>
                    <h4>{doctor?.data[showData]?.email}</h4>
                  </Card.Text>
                  <Card.Text>
                    <h4>{doctor?.data[showData]?.hospital}</h4>
                  </Card.Text>
                  <Card.Text>
                    <h4>{doctor?.data[showData]?.bio}</h4>
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
                    onClick={() =>
                      navigate("/ContactDoctor/" + doctor?.data[showData]?.id)
                    }
                  >
                    CONTACT DOCTOR
                  </button>
                  <Row style={{justifyContent: "center"}}>
                    {+localStorage.getItem("isAdmin") === 1 ? (
                      <NavLink
                        to={`/edit-doctor/${doctor?.data[showData]?.id}`}
                        className="pl-2 nav-link"
                      >
                        <Button bsPrefix="btn-save" className="mb-5">
                          EDIT
                        </Button>
                      </NavLink>
                    ) : null}
                    {+localStorage.getItem("isAdmin") === 1 ? (
                      <NavLink
                        to={() => {}}
                        className="pl-2 nav-link"
                        onClick={() => handleDel(doctor?.data[showData]?.id)}
                      >
                        <Button bsPrefix="btn-save btn-danger" className="mb-5">
                          DELETE
                        </Button>
                      </NavLink>
                    ) : null}
                  </Row>
                </Card.Footer>
                {/* </Card> */}
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default DoctorCard;
