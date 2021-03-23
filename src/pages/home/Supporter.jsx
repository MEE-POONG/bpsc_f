import React from "react";
import {Card, Container, Row, Col, Image, Button} from "react-bootstrap";
const Supporter = () => {
  return (
    <div className="Supporter">
      <Container className="py-5">
        <Row>
          <Col xs="12">
            <Card.Title className="text-center">เครือข่ายของพวกเรา</Card.Title>
          </Col>
          <Col xs="12" style={{textAlign: "center"}}>
            <Image src="/image/home/public health.png" className="p-5" height="200" />
            <Image src="/image/home/thai health.png" className="p-5" height="200" />
            <Image src="/image/home/mio2.png" className="p-5" height="220" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Supporter;
