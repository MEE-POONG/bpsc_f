import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

const AboutTeam = () => {
  return (
    <div className="about-team">
      <div className="scroll-num py-5 about-team-bg">
        <Container className="text-center">
          <p className="h1 font-weight-bold">the team</p>
          <Row className="justify-content-center">
            <Col lg="4" className="pt-5">
              <Image src="/image/image45.png" className="about-team-circle" />
              <p className="h4 font-weight-bold pt-3">Name Surname Admin</p>
            </Col>
            <Col lg="4" className="pt-5">
              <Image src="/image/image 46.png" className="about-team-circle" />
              <p className="h4 font-weight-bold pt-3">Name Surname Admin</p>
            </Col>
            <Col lg="4" className="pt-5">
              <Image src="/image/image 47.png" className="about-team-circle" />
              <p className="h4 font-weight-bold pt-3">Name Surname Admin</p>
            </Col>
            <Col lg="4" className="pt-5">
              <Image src="/image/image 48.png" className="about-team-circle" />
              <p className="h4 font-weight-bold pt-3">Name Surname Admin</p>
            </Col>
            <Col lg="4" className="pt-5">
              <Image src="/image/image 49.png" className="about-team-circle" />
              <p className="h4 font-weight-bold pt-3">Name Surname Admin</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default AboutTeam;
