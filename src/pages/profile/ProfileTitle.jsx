import React, {useState} from "react";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Container, Image, Form, Modal, Row, Col} from "react-bootstrap";

const ProfileTitle = () => {
  const [username] = useState(
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")
  );
  const [email] = useState(localStorage.getItem("email"));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editProfileForm, setEditProfileForm] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <div className="profile-title text-uppercase">
      <div className="profile-title-bg scroll-num py-5">
        <Container className="text-center">
          <Image src="/image/image 19.png" className="about-team-circle" />
          <p className="h1 pt-4">{username}</p>
          <p className="h1 pt-2">{email}</p>
          <div className="pt-2">
            <Button variant="light" className="text-dark" onClick={handleShow}>
              EDIT <FontAwesomeIcon icon={faEdit} />
            </Button>
          </div>
        </Container>

        <Modal
          size="md"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="d-flex justify-content-center"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Container className="text-center">
              <div>
                <div class="avatar-upload">
                  <div class="avatar-edit">
                    <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                    <label for="imageUpload"></label>
                  </div>
                  <div class="avatar-preview">
                    <div
                      id="imagePreview"
                      style={{
                        backgroundImage:
                          "url(https://api.thaibpsc.com/image/1119766f2711496a15d5639b77c2065e2b9e20f22e94)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <Form className="text-left">
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>
                    <h4>
                      ชื่อ<span style={{color: "red"}}>*</span>
                    </h4>
                  </Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="ชื่อ"
                    onChange={(e) =>
                      setEditProfileForm({...editProfileForm, firstName: e.target.value})
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                  <Form.Label>
                    <h4>
                      นามสกุล<span style={{color: "red"}}>*</span>
                    </h4>
                  </Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="นามสกุล"
                    onChange={(e) =>
                      setEditProfileForm({...editProfileForm, lastName: e.target.value})
                    }
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <button className="btn btn-lg btn-danger btn-block text-uppercase mb-3">
                      <h4 className="m-0">CANCLE</h4>
                    </button>
                  </Col>
                  <Col>
                    <button className="btn btn-lg btn-success btn-block text-uppercase mb-3">
                      <h4 className="m-0">OK</h4>
                    </button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ProfileTitle;
