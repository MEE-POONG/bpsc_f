import React, { Component } from "react";
import AboutTitle from "./AboutTitle";
import AboutSubTitle from "./AboutSubTitle";
import AboutTeam from "./AboutTeam";
import AboutContactUS from "./AboutContactUS";
import AboutTalkWithUS from "./AboutTalkWithUS";
import { Col, Row } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <div className="about text-uppercase">
        <AboutTitle />
        <AboutSubTitle />
        <AboutTeam />
        <Row className="mx-0">
          <Col md="6" className="p-0 about-contact-us-bg">
            <AboutContactUS />
          </Col>
          <Col md="6" className="p-0 about-talk-with-us-bg">
            <AboutTalkWithUS />
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
