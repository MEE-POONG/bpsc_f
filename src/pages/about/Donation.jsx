import React from "react";
import Donate from "../../controllers/TheDonate";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
const Donation = () => {
  return (
    <div className="ksstext">
      <Container className="py-5">
        <Row>
          <Col md="9" lg="9">
            <Card.Title>ร่วมบริจาคเพื่อโครงการ BPSC</Card.Title>
            <Card.Subtitle><br/>
              ร่วมเป็นส่วนหนึ่งในการพัฒนาเว็บไซต์ และฟีเจอร์ใหม่ ๆ เพื่อแบ่งปันสิ่งดี ๆ ต่อไป สามารถสนับสนุนพวกเราได้ผ่านการบริจาคที่ช่องทาง “เทใจ”
            </Card.Subtitle>
          </Col>
          <Col md="3" md="3">
              <Button bsPrefix="btn-kss"><Donate /></Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Donation;
