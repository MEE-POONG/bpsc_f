import React, {useState, useEffect, useContext} from "react";
import {Modal, Image, Row, NavDropdown} from "react-bootstrap";
import {
  faBell,
  faCommentAlt,
  faFileDownload,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {API_GET_NOTIFICATION, IMAGE_URL} from "../apis";
import {NavigatorContext} from "../store/NavigatorProvider";

const TheNotification = () => {
  const [showNoti, setShowNoti] = useState(false);
  const handleClose = () => setShowNoti(false);
  const handleShowNoti = () => setShowNoti(true);

  const {navigator, newNavigator} = useContext(NavigatorContext);

  const [notification, setNotification] = useState(null);
  useEffect(() => {
    API_GET_NOTIFICATION().then((result) => {
      newNavigator(0);
      setNotification(result?.data);
    });
  }, [showNoti]);

  return (
    <>
      <NavDropdown.Item onClick={handleShowNoti}>
        <FontAwesomeIcon icon={faBell} /> &nbsp; การแจ้งเตือน{" "}
        {navigator ? (
          <span className="float-right bg-danger text-light px-2">{navigator}</span>
        ) : null}
      </NavDropdown.Item>
      <Modal
        show={showNoti}
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
