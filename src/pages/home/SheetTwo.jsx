

import React, { Component } from "react";
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

class SheetTwo extends Component {
  render() {
    return (
      <div className="sheet-two">
        <div className="scroll-num my-5">
          <Container>
            <Row className="text-center">
              <Col>
                <Card className="sharing">
                  <Card.Body>
                    <Card.Title>500+</Card.Title>
                    <Card.Subtitle>โรวพยาบาลสร้างระบบ BPSC สำเร็จ</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="sharing">
                  <Card.Body>
                    <Card.Title>260+</Card.Title>
                    <Card.Subtitle>เกิดเป็นโรงพยาบาลต้นแบบขยายผล</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="sharing">
                  <Card.Body>
                    <Card.Title>816+</Card.Title>
                    <Card.Subtitle>บุคคลกรว่ามีความสุข</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="sharing">
                  <Card.Body>
                    <Card.Title>240+</Card.Title>
                    <Card.Subtitle>ผู้ได้รับการรักษามีคุณภาพชีวิตที่ดีขึ้น</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid className="p-0" style={{ backgroundImage: `url("image/slideSharing.svg")` }}>
          <Card className="sharing">
            <Card.Body>
              <Card.Title>Hope Sharing</Card.Title>
              <Card.Subtitle>แบ่งปันประสบการณ์</Card.Subtitle>
              <div className="text-50">
                <Card.Text>
                  Short describtion about Hope Sharing
                  .......
                  </Card.Text>
              </div>
              <div className="btn-green">
                <Button variant="green">Discover more {'-->'}</Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
};
export default SheetTwo;

