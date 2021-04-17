import React from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
const Experience = () => {
  return (
    <div className="ksstext">
      <Container className="py-5">
        <Row>
          <Col md="8">
            <Card.Title>ประสบการณ์ที่มีค่า "ไม่ควรจบเพียงที่เดียว"</Card.Title>
            <Card.Subtitle>
              มาร่วมส่งต่อไอเดียเพื่อเป็นประโยชน์ต่อบุคลากรทั่วประเทศไทย
            </Card.Subtitle>
          </Col>
          <Col md="4" className="img">
            <a href="/sharing" >
              <Button bsPrefix="btn-kss">มาแบ่งปันไอเดียกัน</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
