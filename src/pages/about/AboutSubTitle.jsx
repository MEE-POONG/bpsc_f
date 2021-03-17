import React from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";

const AboutSubTitle = () => {
  return (
    <div className="about-subtitle">
      <Container className="p-5">
        <Row className="text-center">
          <Col sm="4">
            <Card.Img className="about-subtitle-image" src="/image/about/about-1.png" />
            <Card.Body>
              <Card.Title>What?</Card.Title>
              <Card.Subtitle>
                เกิดจากการพัฒนาระบบสาธารณสุข<br></br>
                ในการให้บริการด้านดูแลพฤติกรรมและจิตสังคม
              </Card.Subtitle>
            </Card.Body>
          </Col>
          <Col sm="4">
            <Card.Img className="about-subtitle-image" src="/image/about/about-2.png" />
            <Card.Body>
              <Card.Title>Why?</Card.Title>
              <Card.Subtitle>
                เพื่อรักษาโรค NCD
                ที่มีปัจจัยเสี่ยงทั้งด้านพฤติกรรมและส่งผลต่อโรคทางจิตเวชคือ กังวล ซึมเศร้า
                และติดสารเสพติด
              </Card.Subtitle>
            </Card.Body>
          </Col>
          <Col sm="4">
            <Card.Img className="about-subtitle-image" src="/image/about/about-3.png" />
            <Card.Body>
              <Card.Title>How?</Card.Title>
              <Card.Subtitle>
                ทำให้คนไข้ได้รับการเปลี่ยนแปลงพฤติกรรม<br></br>อย่างยั่งยืน
              </Card.Subtitle>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AboutSubTitle;
