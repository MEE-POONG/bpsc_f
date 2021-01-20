import React, { useState } from "react";
import { Modal, Button, Image, Row } from "react-bootstrap";
import { faBell, faCommentAlt, faFileDownload, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TheNotification = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="motivation">
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faBell} className="icon-title" />การแจ้งเตือน</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="scroll">
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faCommentAlt} className="icon-btn" />
                            <span className="ml-3">15 ข้อความใหม่ ในแชร์ของคุณ</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faHeart} className="icon-btn" />
                            <span className="ml-3">27 ถูกใจแชร์ของคุณ</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faCommentAlt} className="icon-btn" />
                            <span className="ml-3">15 ข้อความใหม่ ในแชร์ของคุณ</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                        <Row className="blue-green mx-0 mb-4">
                            <Image src="image/home/home1.png" roundedCircle />
                            <FontAwesomeIcon icon={faFileDownload} className="icon-btn" />
                            <span className="ml-3">มีการอัพโหลด E-Learning ใหม่</span>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Row className="blue-green">
                        <span>OK</span>
                    </Row>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default TheNotification;
