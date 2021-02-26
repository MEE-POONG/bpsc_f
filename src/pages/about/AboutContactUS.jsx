import {faMapMarked, faPhoneAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const AboutContactUS = () => {
  return (
    <div className="about-contact-us">
      <Container className="text-center py-5">
        <p className="display-4 font-weight-bold text-white">contact us</p>
        <p className="h1 font-weight-bold text-white">
          {/* <Row className="py-3 my-3">
            <Col xs="2" className="text-right">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </Col>
            <Col xs="10" className="text-left">
              <span className="contact-mobile">WAITING</span>
            </Col>
          </Row> */}
          <Row className="py-3 my-3">
            <Col xs="2" className="text-right">
              <FontAwesomeIcon icon={faMapMarked} />
            </Col>
            <Col xs="10" className="text-left">
              <span className="contact-mobile">
                สำนักวิชาการกรมสุขภาพจิต กรมสุขภาพจิต กระทรวงสาธารณสุข<br></br>
                <br></br>อาคาร 1 ชั้น 2 เลขที่ 88/20 หมู่ 4 ซอยติวานนท์ 4 ถนนติวานนท์
                อำเภอเมือง จังหวัดนนทบุรี 11000
              </span>
            </Col>
          </Row>
          <Row className="py-3 my-3">
            <Col xs="2" className="text-right">
              <FontAwesomeIcon icon={faEnvelope} />
            </Col>
            <Col xs="10" className="text-left">
              <span className="contact-mobile">psc.dmh2017@gmail.com</span>
            </Col>
          </Row>
        </p>
      </Container>
    </div>
  );
};
export default AboutContactUS;
