import React, {useState} from "react";
import {Modal, Button, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

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
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container-sm scroll login-page">
            <div class="card card-signin mb-5 title">
              <div class="card-body">
                <h5 class="card-title text-center">
                  <Image
                    alt=""
                    src="image/header/Logo.png"
                    width="100"
                    className="d-inline-block align-tops"
                    style={{objectFit: "contain"}}
                  />
                </h5>
                <div class="form-signin">
                  <div class="form-label-group">
                    <input
                      //   type="email"
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

                  {/* <div class="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                    />
                    <label class="custom-control-label" for="customCheck1">
                      Remember password
                    </label>
                  </div> */}
                  <button
                    class="btn btn-lg btn-primary btn-block text-uppercase"
                    onClick={() => {
                      sessionStorage.setItem("BPSC_USER_LOGIN", true);
                      navigate("/");
                    }}
                  >
                    Sign in
                  </button>
                  <hr class="my-4" />
                  <button class="btn btn-lg btn-google btn-block text-uppercase">
                    Sign in with Google
                  </button>
                  <button
                    class="btn btn-lg btn-facebook btn-block text-uppercase"
                    onClick={() => handleLogin()}
                  >
                    Sign in with Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TheLogin;
