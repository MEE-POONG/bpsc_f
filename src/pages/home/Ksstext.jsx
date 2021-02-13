import React from "react";
import {Card, Container, Row, Col, Image, Button} from "react-bootstrap";
const Ksstext = () => {
  return (
    <div className="ksstext">
      <Container className="py-5">
        <Row>
          <Col md="6" className="img">
            <Image src="/image/home/image4.png" />
          </Col>
          <Col md="6">
            <Card.Title>กสศ</Card.Title>
            <Card.Subtitle>
              insKru ร่วมเป็นส่วนหนึ่งในการขับเคลื่อน "ห้องเรียนเสมอภาค"
              ร่วมกับกองทุนเพื่อความเสมอภาคทางการศึกษา
            </Card.Subtitle>
            <a href="http://www.thaimio.com/" target="_blank">
              <Button bsPrefix="kss">ไปเว็บ กสศ กันเลย!</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ksstext;
