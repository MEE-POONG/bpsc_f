import { faMapMarked, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutContactUS = () => {
  return (
    <div className="about-contact-us">
      <div className="scroll-num p-5 about-contact-us-bg">
        <Container className="text-center">
          <p className="display-4 font-weight-bold text-white">contact us</p>
          <p className="h1 font-weight-bold text-white">
            <Row>
              <Col xs="12">
                <Row className="pt-4">
                  <Col xs="2" className="text-right">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </Col>
                  <Col xs="10" className="text-left">
                    <span className="contact-mobile">+6699-999-9999</span>
                  </Col>
                </Row>
              </Col>
              <Col xs="12">
                <Row className="pt-4">
                  <Col xs="2" className="text-right">
                    <FontAwesomeIcon icon={faMapMarked} />
                  </Col>
                  <Col xs="10" className="text-left">
                    <span className="contact-mobile">#room Soi road province city, Zip code</span>
                  </Col>
                </Row>
              </Col>
              <Col xs="12">
                <Row className="pt-4">
                  <Col xs="2" className="text-right">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Col>
                  <Col xs="10" className="text-left">
                    <span className="contact-mobile">BPSC.official@BPSC.com</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </p>
        </Container>
      </div>
    </div>
  );
};
export default AboutContactUS;
