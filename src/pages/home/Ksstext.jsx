import React from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
const Ksstext = () => {
  return (
    <div className="ksstext">
      <Container className="py-5">
        <Row>
          <Col md="6" className="img">
            <Image src="/image/home/kss.png" />
          </Col>
          <Col md="6">
            <Card.Title>
              สุขด้วยสติ..ทั้งองค์กรอย่างยั่งยืน ( MIO )
            </Card.Title>
            <Card.Subtitle>
              โครงการที่นำเรื่องของสติ สมาธิ หรือการพัฒนาจิตนี้มาออกแบบ
              และสร้างระบบการทำงานให้เกิดเป็นวิถีปฏิบัติเป็นค่านิยมร่วม
              เพื่อให้เกิด  “องค์กรแห่งสติ”
            </Card.Subtitle>
            <a href="http://www.thaimio.com/" target="_blank">
              <Button bsPrefix="btn-kss">ไปเว็บ กสศ กันเลย!</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ksstext;
