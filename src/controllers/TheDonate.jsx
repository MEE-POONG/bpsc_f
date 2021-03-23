import React, {useState, useEffect} from "react";
import {Modal, Image, Row, Container} from "react-bootstrap";
import {
  faBell,
  faCommentAlt,
  faFileDownload,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="xs" aria-labelledby="contained-modal-title-vcenter" centered>
      {/* <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">การสนับสนุน</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <Container className="p-5">
          <center>
            <div class="_610a0">
              <b>
                <h1>ขอบคุณที่อยู่ด้วยกันตลอดปีนี้</h1>
              </b>
              <br />
              <h1>
                ร่วมเป็นส่วนหนึ่งในการพัฒนาเว็บไซต์ และฟีเจอร์ใหม่ ๆ เพื่อแบ่งปันสิ่งดี ๆ
                ต่อไป สามารถสนับสนุนพวกเราได้ผ่านการบริจาคที่ช่องทาง “เทใจ”
              </h1>
            </div>

            <div class="_610a0">
              <a
                class="Button Blue"
                onClick={() =>
                  (window.location.href = "https://taejai.com/th/d/inskru_backer")
                }
                style={{color: "white"}}
              >
                บริจาคให้ THAIBPSC
              </a>
            </div>
          </center>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

const Donate = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <a onClick={() => setModalShow(true)} className="dropdown-h-item">
        การสนับสนุน
      </a>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Donate;
