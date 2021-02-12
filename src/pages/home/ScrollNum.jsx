import React, {useState, useEffect} from "react";
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import SheetThree from "./SheetThree";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import {useNavigate} from "react-router-dom";

const ScrollNum = () => {
  const navigate = useNavigate();
  const [setStart, setSetStart] = useState(false);
  const [runningOne, setRunningOne] = useState(0);
  const [runningTwo, setRunningTwo] = useState(0);
  const [runningTree, setRunningTree] = useState(0);
  const [runningFour, setRunningFour] = useState(0);
  useEffect(() => {
    if (setStart) {
      runningOne < 500 && setRunningOne((e) => (e += 1));
      runningTwo < 260 && setRunningTwo((e) => (e += 1));
      runningTree < 816 && setRunningTree((e) => (e += 1));
      runningFour < 240 && setRunningFour((e) => (e += 1));
    }
  });

  useScrollPosition(({prevPos, currPos}) => {
    currPos.y <= -1006 && setSetStart(true);
  });

  return (
    <div className="sheet-two">
      <div className="scroll-num my-5">
        <Container>
          <Row className="text-center">
            <Col xs="6" md="3" lg="3">
              <Card className="sharing">
                <Card.Body>
                  <Card.Title>{runningOne}+</Card.Title>
                  <Card.Subtitle>โรงพยาบาลสร้างระบบ BPSC สำเร็จ</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" md="3" lg="3">
              <Card className="sharing">
                <Card.Body>
                  <Card.Title>{runningTwo}+</Card.Title>
                  <Card.Subtitle>เกิดเป็นโรงพยาบาลต้นแบบขยายผล</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" md="3" lg="3">
              <Card className="sharing">
                <Card.Body>
                  <Card.Title>{runningTree}+</Card.Title>
                  <Card.Subtitle>บุคคลกรว่ามีความสุข</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" md="3" lg="3">
              <Card className="sharing">
                <Card.Body>
                  <Card.Title>{runningFour}+</Card.Title>
                  <Card.Subtitle>ผู้ได้รับการรักษามีคุณภาพชีวิตที่ดีขึ้น</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default ScrollNum;
