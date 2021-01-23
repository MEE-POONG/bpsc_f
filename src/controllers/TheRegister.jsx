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

const TheRegister = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    return (
        <>
            <button className="btn btn-lg btn-google" onClick={handleShow}>
                สมัคสมาชิก
            </button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="box-login">
                <Modal.Header closeButton>
                    <h1>BPSC อยากรู้จักคุณ</h1>
                </Modal.Header>
                <Modal.Body>
                    <Image alt="" src="image/header/Logo.png" className="d-inline-block align-tops" style={{ objectFit: "contain", height: "0px" }} />
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><h4>ชื่อ<span style={{ color: 'red' }}>*</span></h4></Form.Label>
                                <Form.Control size="lg" type="email" placeholder="อีเมล" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><h4>นามสกุล<span style={{ color: 'red' }}>*</span></h4></Form.Label>
                                <Form.Control size="lg" type="email" placeholder="อีเมล" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><h4>อีเมล<span style={{ color: 'red' }}>*</span></h4></Form.Label>
                                <Form.Control size="lg" type="email" placeholder="อีเมล" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><h4>รหัสผ่าน<span style={{ color: 'red' }}>*</span></h4></Form.Label>
                                <Form.Control size="lg" type="email" placeholder="อีเมล" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label><h4>ยืนยันรหัสผ่าน</h4></Form.Label>
                                <Form.Control size="lg" type="password" placeholder="รหัสผ่าน" />
                            </Form.Group>
                            <button className="btn btn-lg btn-primary btn-block text-uppercase mb-3" onClick={() => {
                                sessionStorage.setItem("BPSC_USER_LOGIN", true);
                                navigate("/");
                            }}>
                                <h4 className="m-0">ยืนยัน</h4>
                            </button>
                        </Form>
                        <hr class="my-4" />
                    </Card.Body>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default TheRegister;
