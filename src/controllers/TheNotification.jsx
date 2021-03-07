import React, {useState, useEffect} from "react";
import {Modal, Image, Row, NavDropdown} from "react-bootstrap";
import {
  faBell,
  faCommentAlt,
  faFileDownload,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {API_GET_NOTIFICATION, IMAGE_URL} from "../apis";

const TheNotification = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [notification, setNotification] = useState(null);
  useEffect(() => {
    API_GET_NOTIFICATION().then((result) => {
      setNotification(result?.data);
    });
  }, [show]);

  return (
    <>
      <NavDropdown.Item onClick={handleShow}>
        <FontAwesomeIcon icon={faBell} /> &nbsp; การแจ้งเตือน{" "}
      </NavDropdown.Item>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="motivation"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faBell} className="icon-title pr-2" />
            การแจ้งเตือน
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="scroll">
            {notification?.data?.map(({id, type, typeId, content, isSeen}) => (
              <Row className="blue-green mx-0 mb-4">
                {/* <Image src="image/home/home1.png" roundedCircle />
                <FontAwesomeIcon icon={faCommentAlt} className="icon-btn" /> */}
                <span className="ml-3">{content}</span>
              </Row>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Row className="blue-green" onClick={handleClose}>
            <span>OK</span>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default TheNotification;
