import { faMapMarked, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutContactUS = () => {
  return (
    <div className="about-contact-us">
      <Container className="text-center py-5">
        <p className="display-4 font-weight-bold text-white">contact us</p>
        <p className="h1 font-weight-bold text-white">
          <Row className="py-3 my-3">
            <Col xs="2" className="text-right">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </Col>
            <Col xs="10" className="text-left">
              <span className="contact-mobile">+6699-999-9999</span>
            </Col>
          </Row>
          <Row className="py-3 my-3">
            <Col xs="2" className="text-right">
              <FontAwesomeIcon icon={faMapMarked} />
            </Col>
            <Col xs="10" className="text-left">
              <span className="contact-mobile">
                #room Soi road province city, Zip code
                    </span>
            </Col>
          </Row>
          <Row className="py-3 my-3">
            <Col xs="2" className="text-right">
              <FontAwesomeIcon icon={faEnvelope} />
            </Col>
            <Col xs="10" className="text-left">
              <span className="contact-mobile">BPSC.official@BPSC.com</span>
            </Col>
          </Row>
        </p>
      </Container>
    </div>
  );
};
export default AboutContactUS;
