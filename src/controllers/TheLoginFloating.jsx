import React, {useState} from "react";
import {Modal, Button, Image, Card, Form, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import firebase from "firebase/app";
import "firebase/auth";
import TheRegister from "./TheRegister";
import {
  API_LOGIN,
  API_FORGET_PASSWORD,
  API_RE_VERIFICATION,
  API_LOGIN_FACEBOOK,
} from "../apis";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

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
  const [signUpForm, setSignUpForm] = useState(false);
  const handleClose = () => {
    setShow(false);
    handleNonSignUp();
  };
  const handleShow = () => setShow(true);
  const handleNonSignUp = () => setSignUpForm("LOGIN");
  const handleSignUp = () => setSignUpForm("SING UP");
  const handleForget = () => setSignUpForm("FORGET");
  const [handelEmail, setHandelEmail] = useState("");
  const [handlePassword, setHandlePassword] = useState("");
  const navigate = useNavigate();

  const handleLoginFB = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;
        // console.log("accessToken", accessToken);
        if (accessToken) {
          API_LOGIN_FACEBOOK(accessToken)
            .then((response) => {
              // console.log("LOGIN_FB", response);
              var decoded = jwt_decode(response.data.accessToken);
              localStorage.setItem("token", response.data.accessToken);
              localStorage.setItem("refresh-token", response.data.refreshToken);
              localStorage.setItem("id", decoded.id);
              localStorage.setItem("isAdmin", decoded.isAdmin);
              localStorage.setItem("email", decoded.email);
              localStorage.setItem("firstName", decoded.firstName);
              localStorage.setItem("lastName", decoded.lastName);
              localStorage.setItem("loginMethod", decoded.loginMethod);
              localStorage.setItem("BPSC_USER_LOGIN", true);
              navigate(0);
            })
            .catch((error) => {
              const errorMSG = error?.response?.data;
              if (errorMSG?.error === "Email not Verify") {
                Swal.fire({
                  title: errorMSG?.error,
                  text: errorMSG?.message,
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, Reverify!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    API_RE_VERIFICATION(handelEmail);
                    Swal.fire("THANK YOU!", "Check your email.", "success");
                  }
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: errorMSG?.error,
                  text: errorMSG?.message,
                });
              }
            });
        }
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // console.log("credential", credential);
        // ...
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    API_LOGIN(handelEmail, handlePassword)
      .then((response) => {
        var decoded = jwt_decode(response.data.accessToken);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("refresh-token", response.data.refreshToken);
        localStorage.setItem("id", decoded.id);
        localStorage.setItem("isAdmin", decoded.isAdmin);
        localStorage.setItem("email", decoded.email);
        localStorage.setItem("firstName", decoded.firstName);
        localStorage.setItem("lastName", decoded.lastName);
        localStorage.setItem("loginMethod", decoded.loginMethod);
        localStorage.setItem("BPSC_USER_LOGIN", true);
        navigate(0);
      })
      .catch((error) => {
        const errorMSG = error?.response?.data;
        if (errorMSG?.error === "Email not Verify") {
          Swal.fire({
            title: errorMSG?.error,
            text: errorMSG?.message,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reverify!",
          }).then((result) => {
            if (result.isConfirmed) {
              API_RE_VERIFICATION(handelEmail);
              Swal.fire("THANK YOU!", "Check your email.", "success");
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: errorMSG?.error,
            text: errorMSG?.message,
          });
        }
      });
  };
  const handleForgetPassword = (e) => {
    e.preventDefault();
    API_FORGET_PASSWORD(handelEmail)
      .then(() => {
        Swal.fire("สำเร็จ!", "โปรดเช็ค email!", "success").then(() =>
          window.location.reload()
        );
      })
      .catch((error) => {
        const errorMSG = error?.response?.data;
        Swal.fire({
          icon: "error",
          title: errorMSG?.error,
          text: errorMSG?.message,
        });
      });
  };
  const titleCardLogin = (
    <h1>
      {signUpForm === "SING UP"
        ? "BPSC อยากรู้จักคุณ"
        : signUpForm === "FORGET"
        ? "ลืมรหัสผ่าน"
        : "ลงชื่อเข้าใช้งาน"}
    </h1>
  );
  const contentCardLogin = (
    <Card.Body>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <h4>อีเมล</h4>
          </Form.Label>
          <Form.Control
            size="lg"
            type="email"
            placeholder="อีเมล"
            onChange={(e) => setHandelEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <h4>รหัสผ่าน</h4>
          </Form.Label>
          <Form.Control
            size="lg"
            type="password"
            placeholder="รหัสผ่าน"
            onChange={(e) => setHandlePassword(e.target.value)}
          />
        </Form.Group>
        <button
          className="btn btn-lg btn-primary btn-block text-uppercase mb-3"
          onClick={(e) => handleLogin(e)}
        >
          <h4 className="m-0">เข้าสู่ระบบ</h4>
        </button>
        <button className="btn-repass" onClick={handleForget}>
          <h4 className="m-0">ลืมรหัสผ่าน</h4>
        </button>
      </Form>
      <hr className="my-4" />
    </Card.Body>
  );
  const contentCardForget = (
    <Card.Body>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <h4>อีเมล</h4>
          </Form.Label>
          <Form.Control
            size="lg"
            type="email"
            placeholder="อีเมล"
            onChange={(e) => setHandelEmail(e.target.value)}
          />
        </Form.Group>
        <button
          className="btn btn-lg btn-primary btn-block text-uppercase mb-3"
          onClick={(e) => handleForgetPassword(e)}
        >
          <h4 className="m-0">RESET</h4>
        </button>
      </Form>
      <hr className="my-4" />
    </Card.Body>
  );
  return (
    <>
      <Button
        variant="green-set"
        className="nav-link green-set px-5 py-3"
        style={{borderRadius: "25px"}}
        onClick={handleShow}
      >
        <Row>
          {" "}
          <Image src="/image/header/WhiteLogo.png" className="pr-3" width="40px" height="40px" />{" "}
          <h1
            style={{
              placeSelf: "center",
            }}
          >
            LOGIN
          </h1>{" "}
        </Row>
      </Button>
      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        className="box-login p-0"
      >
        {/* <Modal.Header closeButton>{titleCardLogin}</Modal.Header> */}
        <Modal.Body>
          <Col xs="12">
            <Row>
              <Image
                alt="LOGO BPSC"
                src="/image/header/Logo.png"
                className="d-inline-block align-tops ml-3"
                style={{objectFit: "contain", maxWidth: "140px", maxHeight: "140px"}}
              />
              <h1
                style={{
                  alignSelf: "right",
                  marginTop: "14px",
                  paddingRight: "12.5px",
                }}
              >
                {titleCardLogin}
              </h1>
            </Row>
          </Col>
          {/* <div className="text-center">
          </div> */}
          {signUpForm === "SING UP" ? (
            <>
              <TheRegister />
              <button className="btn btn-lg btn-google" onClick={handleNonSignUp}>
                ย้อนกลับ
              </button>
            </>
          ) : signUpForm === "FORGET" ? (
            <>
              {contentCardForget}
              <button className="btn btn-lg btn-google" onClick={handleNonSignUp}>
                ย้อนกลับ
              </button>
            </>
          ) : (
            <>
              {contentCardLogin}
              <Card.Footer>
                <div className="px-3 pb-3">
                  By Clicking Sign Up, you agree to our Terms and that you have read our{" "}
                  <a href="#" onClick={() => navigate('/policy')}>Data Use Policy</a>, including our Cookie Use
                </div>

                <button className="btn btn-lg btn-google" onClick={handleSignUp}>
                  สมัครสมาชิก
                </button>
                <button
                  className="btn btn-lg btn-facebook"
                  onClick={() => handleLoginFB()}
                >
                  Sign in with Facebook
                </button>
              </Card.Footer>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TheLogin;
