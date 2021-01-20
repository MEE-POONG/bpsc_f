import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

const AboutSubTitle = () => {
  return (
    <div className="about-subtitle">
      <Container className="p-5">
        <Row className="">
          <Col sm="6" className="text-center">
            <Image className="about-subtitle-image" src="/image/image44.png" />
          </Col>
          <Col sm="6">
            <Col xs="12">
              <p className="h1 font-weight-bold">What we provide ?</p>
              <p className="h3 subtitle-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore ...
              </p>
            </Col>
            <Col xs="12" className="pt-5">
              <p className="h1 font-weight-bold">Our values</p>
              <p className="h3 subtitle-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore ...
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AboutSubTitle;
