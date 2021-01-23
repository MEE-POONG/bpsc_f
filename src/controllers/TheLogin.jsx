import React, { useState } from "react";
import { Modal, Button, Image, Card, Form, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const TheLogin = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const token = result.credential.accessToken;
        const user = result.user;
        // ...
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  };
  return (
    <>
      <Button variant="success" className="nav-link" onClick={handleShow}>
        LOGIN
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="box-login">
        <Modal.Header closeButton>
          <h1>ลงชื่อเข้าใช้งาน BPSC</h1>
        </Modal.Header>
        <Modal.Body>
          {/* <Image alt="" src="image/header/Logo.png" className="d-inline-block align-tops" style={{ objectFit: "contain" }}/> */}
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label><h4>อีเมล</h4></Form.Label>
                <Form.Control size="lg" type="email" placeholder="อีเมล" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label><h4>รหัสผ่าน</h4></Form.Label>
                <Form.Control size="lg" type="password" placeholder="รหัสผ่าน" />
              </Form.Group>
              <button className="btn btn-lg btn-primary btn-block text-uppercase mb-3" onClick={() => {
                sessionStorage.setItem("BPSC_USER_LOGIN", true);
                navigate("/");
              }}>
                <h4 className="m-0">เข้าสู่ระบบ</h4>
              </button>
              <button className="btn-repass">
                <h4 className="m-0">ลืมรหัสผ่าน</h4>
              </button>
            </Form>
            <hr class="my-4" />

          </Card.Body>
          <Card.Footer>
            <button className="btn btn-lg btn-google">
              Sign in with Google
                  </button>
            <button className="btn btn-lg btn-facebook"
              onClick={() => handleLogin()}
            >
              Sign in with Facebook
                  </button>
          </Card.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TheLogin;
