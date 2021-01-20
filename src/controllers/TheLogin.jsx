import React, { useState } from "react";
import { Modal, Button, Image, Row } from "react-bootstrap";
import { faFileDownload, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TheLogin = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="success" className="nav-link" onClick={handleShow}>
        LOGIN
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="motivation"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="scroll login-page">
            <div class="card card-signin my-5 title">
              <div class="card-body">
                <h5 class="card-title text-center">
                  <Image
                    alt=""
                    src="image/header/Logo.png"
                    width="100"
                    className="d-inline-block align-tops"
                    style={{ objectFit: "contain" }}
                  />
                </h5>
                <form class="form-signin">
                  <div class="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      class="form-control"
                      required
                      autofocus
                    />
                    <label for="inputEmail">Email address</label>
                  </div>

                  <div class="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control"
                      required
                    />
                    <label for="inputPassword">Password</label>
                  </div>

                  <div class="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                    />
                    <label class="custom-control-label" for="customCheck1">
                      Remember password
                    </label>
                  </div>
                  <button
                    class="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <hr class="my-4" />
                  <button
                    class="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit"
                  >
                    <i class="fab fa-google mr-2"></i> Sign in with Google
                  </button>
                  <button
                    class="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="submit"
                  >
                    <i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TheLogin;
