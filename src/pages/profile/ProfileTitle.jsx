import React, {useState, useEffect} from "react";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Container, Image, Form, Modal, Row, Col} from "react-bootstrap";
import {
  API_GET_USER_INFO,
  API_GET_USER_UPDATE,
  API_GET_USER_UPDATE_PHOTO,
  IMAGE_URL,
} from "../../apis";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const ProfileTitle = () => {
  const [userInfo, setUserInfo] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleGetUserInfo();
  }, []);
  const handleGetUserInfo = () => {
    API_GET_USER_INFO(localStorage.getItem("id")).then((result) => {
      setUserInfo(result?.data);
    });
  };
  const navigate = useNavigate();

  const [editProfileForm, setEditProfileForm] = useState({
    firstName: userInfo?.firstName,
    lastName: userInfo?.LastName,
  });

  useEffect(() => {
    setEditProfileForm({
      firstName: userInfo?.firstName,
      lastName: userInfo?.LastName,
    });
  }, [userInfo?.firstName, userInfo?.LastName]);

  const userUpdate = (e) => {
    e.preventDefault();
    API_GET_USER_UPDATE(localStorage.getItem("id"), editProfileForm)
      .then(() => {
        Swal.fire("สำเร็จ!", "เปลี่ยนแปลงข้อมูลสำเร็จ!", "success").then(() => {
          handleClose();
          handleGetUserInfo();
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error?.error,
          text: error?.message,
        });
      });
  };
  const userUpdatePhoto = (e) => {
    // console.log(e.target.files[0]);
    API_GET_USER_UPDATE_PHOTO(localStorage.getItem("id"), e.target.files[0])
      .then(() => {
        Swal.fire("สำเร็จ!", "เปลี่ยนแปลงข้อมูลสำเร็จ!", "success").then(() => {
          handleClose();
          handleGetUserInfo();
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error?.error,
          text: error?.message,
        });
      });
  };
  return (
    <div className="profile-title text-uppercase">
      <div className="profile-title-bg scroll-num py-5">
        <Container className="text-center">
          <Image
            src={
              userInfo?.picture
                ? IMAGE_URL + userInfo?.picture
                : "https://chiccarrent.com/files/images/default-placeholder.png"
            }
            alt={userInfo?.firstName + " " + userInfo?.LastName}
            className="about-team-circle"
          />
          <p className="h1 pt-4">{userInfo?.firstName + " " + userInfo?.LastName}</p>
          <p className="h1 pt-2">{userInfo?.email}</p>
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
          className="d-flex justify-content-center profile-popup-edit"
          // bsPrefix="profile-popup-edit"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Container className="text-center">
<<<<<<< Updated upstream
                <div class="avatar-upload">
                  <div class="avatar-edit">
                    <input
=======
              <div class="avatar-upload">
                <div class="avatar-edit">
                  {/* <input
>>>>>>> Stashed changes
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => userUpdatePhoto(e)}
<<<<<<< Updated upstream
                    />
                    <label for="imageUpload"></label>
                  </div>
                  <div class="avatar-preview">
                    <div
                      id="imagePreview"
                      style={{
                        backgroundImage: `url(
                        ${userInfo?.picture
=======
                    /> */}
                  <label for="imageUpload"></label>
                </div>
                <div class="avatar-preview">
                  <div
                    id="imagePreview"
                    style={{
                      backgroundImage: `url(
                        ${
                          userInfo?.picture
>>>>>>> Stashed changes
                            ? IMAGE_URL + userInfo?.picture
                            : "https://chiccarrent.com/files/images/default-placeholder.png"
                        }
                        )`,
                    }}
                  ></div>
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
                    value={editProfileForm.firstName}
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
                    value={editProfileForm.lastName}
                    onChange={(e) =>
                      setEditProfileForm({...editProfileForm, lastName: e.target.value})
                    }
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <div
                      className="btn btn-lg btn-danger btn-block text-uppercase mb-3"
                      onClick={handleClose}
                    >
                      <h4 className="m-0">CANCLE</h4>
                    </div>
                  </Col>
                  <Col>
                    <button
                      className="btn btn-lg btn-success btn-block text-uppercase mb-3"
                      onClick={(e) => userUpdate(e)}
                    >
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
