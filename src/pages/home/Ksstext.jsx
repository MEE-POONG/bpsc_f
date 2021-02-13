import React from "react";
import { Card, Container,Row, Col, Image } from "react-bootstrap";
const Ksstext = () => {
  return (
    <div className="ksstext">
      <Container className="py-5">
        <Row>
          <Col className="text-right">
            <Image src="/image/home/image4.png" />
          </Col>
          <Col>
            <Card.Title>
              กสศ
            </Card.Title>
            <Card.Subtitle>
              insKru ร่วมเป็นส่วนหนึ่งในการขับเคลื่อน "ห้องเรียนเสมอภาค" ร่วมกับกองทุนเพื่อความเสมอภาคทางการศึกษา
            </Card.Subtitle>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ksstext;
