import React, {useState, useEffect} from "react";
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import SheetThree from "./SheetThree";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import {useNavigate} from "react-router-dom";

import {API_GET_HOSPITAL} from "../../apis";

const ScrollNum = () => {
  const navigate = useNavigate();
  const [setStart, setSetStart] = useState(false);
  const [runningOne, setRunningOne] = useState(0);
  const [runningTwo, setRunningTwo] = useState(0);
  const [runningTree, setRunningTree] = useState(0);
  const [runningFour, setRunningFour] = useState(0);
  const [data, setData] = useState({
    hospital: 0,
    prototype: 0,
    happy: 0,
    better: 0,
  });

  useEffect(() => {
    API_GET_HOSPITAL().then((result) => {
      setData(result?.data);
    });
  }, []);

  useEffect(() => {
    // if (setStart) {
    runningOne < data.hospital && setRunningOne((e) => (e += 1));
    runningTwo < data.prototype && setRunningTwo((e) => (e += 1));
    runningTree < data.happy && setRunningTree((e) => (e += 1));
    runningFour < data.better && setRunningFour((e) => (e += 1));
    // }
  });

  // useScrollPosition(({prevPos, currPos}) => {
  //   console.log(prevPos);
  //   currPos.y <= 0 && setSetStart(true);
  // });

  return (
    <div className="sheet-two">
      <div className="scroll-num py-0">
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
                  <Card.Subtitle>เกิดเป็นโรงพยาบาลต้นแบบ</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" md="3" lg="3">
              <Card className="sharing">
                <Card.Body>
                  <Card.Title>{runningTree}+</Card.Title>
                  <Card.Subtitle>บุคคลากรมีความสุข</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" md="3" lg="3">
              <Card className="sharing">
                <Card.Body>
                  <Card.Title>{runningFour}+</Card.Title>
                  <Card.Subtitle>ประชาชนมีคุณภาพชีวิตที่ดีขึ้น</Card.Subtitle>
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
