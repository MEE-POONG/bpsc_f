import React, { Component } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import SheetThree from "./SheetThree";

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
                    <Card.Subtitle>
                      โรวพยาบาลสร้างระบบ BPSC สำเร็จ
                    </Card.Subtitle>
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
                    <Card.Subtitle>
                      ผู้ได้รับการรักษามีคุณภาพชีวิตที่ดีขึ้น
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid className="p-0">
          <Card className="sharing">
            <Card.Body>
              <Row className="m-lg-0">
                <Col lg="6" className="text-center py-5">
                  <Card.Title>Hope Sharing</Card.Title>
                  <Card.Subtitle>แบ่งปันประสบการณ์</Card.Subtitle>
                  <div>
                    <Card.Text>
                      Short describtion about Hope Sharing .......
                    </Card.Text>
                      <Button variant="green">Discover more {"-->"}</Button>
                  </div>
                </Col>
                <Col lg="6">
                  <SheetThree />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
export default SheetTwo;
