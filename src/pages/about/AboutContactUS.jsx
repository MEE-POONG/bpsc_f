import {faMapMarked, faPhoneAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

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
          <Row className="py-3 my-3">
            <Col xs="2" className="text-right">
              <FontAwesomeIcon icon={faFacebook} />
            </Col>
            <Col xs="10" className="text-left">
              <a
                href="https://www.facebook.com/BPSC-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%9E%E0%B8%A4%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%A1%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B8%AA%E0%B8%B8%E0%B8%82-100333471984860"
                className="contact-mobile text--white"
                target="_blank"
              >
                BPSC-การดูแลพฤติกรรมและจิตสังคมในระบบสาธารณสุข
              </a>
            </Col>
          </Row>
        </p>
      </Container>
    </div>
  );
};
export default AboutContactUS;
