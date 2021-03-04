import React, {Suspense, useEffect, useState} from "react";

import TheHeader from "./controllers/TheHeader";
import "./assets/css/App.css";
import "./assets/scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TheLoginFloating from "./controllers/TheLoginFloating";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import routes from "./routes.js";
import {API_GET_ISFIRSTLOGIN} from "./apis";
import {Card, Modal, Button} from "react-bootstrap";
// import {useNavigate} from "react-router-dom";

export default function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("BPSC_USER_LOGIN") === "true") {
      API_GET_ISFIRSTLOGIN().then(e => {
        if (e?.data?.isFirstLogin) {
          handleShow();
        }
      })
    }
  }, []);

  const loading = <div className="loader-body pt-3 text-center">LOADING...</div>;
  return (
    <Router>
      <div className="wrapper">
        <TheHeader />
        <div className="body pt-3">
          <Suspense fallback={loading}>
            <Routes>
              {routes.map((route, idx) => {
                return (
                  route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={+route?.exact}
                      name={route.name}
                      element={<route.component />}
                    />
                  )
                );
              })}
            </Routes>
          </Suspense>
          {localStorage.getItem("BPSC_USER_LOGIN") !== "true" ? (
            <div className="floating-login">
              <TheLoginFloating />
            </div>
          ) : (
            ""
          )}
        </div>
        <Modal
          show={show}
          backdrop="static"
          keyboard={false}
          className="d-flex justify-content-center gallery-page"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Card className="text-center p-5">
              {/* <Card.Header>Featured</Card.Header> */}
              <Card.Body className="p-5">
                {/* <Card.Title>ถ้าคุณเป็นหมอ</Card.Title> */}
                <Button
                  variant="primary"
                  onClick={() =>
                    (window.location.href = "https://forms.gle/g9Ls5mMGdVPv87uK9")
                  }
                >
                  คลิกที่นี่ ถ้าคุณเป็นหมอ
                </Button>
              </Card.Body>
              {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
            <Card className="text-center p-5">
              {/* <Card.Header>Featured</Card.Header> */}
              <Card.Body className="p-5">
                {/* <Card.Title>ถ้าคุณเป็นบุคคลทั่วไป</Card.Title> */}
                <Button variant="primary" onClick={handleClose}>
                  คลิกที่นี่ ถ้าคุณเป็นบุคคลทั่วไป
                </Button>
              </Card.Body>
              {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
          </Modal.Body>
        </Modal>
      </div>
    </Router>
  );
}
