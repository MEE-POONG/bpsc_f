import React, {useState, useEffect} from "react";
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import SheetThree from "./SheetThree";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import {useNavigate} from "react-router-dom";

const SheetTwo = () => {
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
      <Container fluid className="p-0">
        <Card className="sharing">
          <Card.Body>
            <Row className="m-lg-0">
              <Col lg="6" className="text-center py-5">
                <Card.Title>Hope Sharing</Card.Title>
                <Card.Subtitle>แบ่งปันประสบการณ์</Card.Subtitle>
                <div style={{alignSelf: "center"}}>
                  <Card.Text>
                    นอกจากการแลกเปลี่ยนความรู้ในกลุ่มบุคลากร (CoPs)
                    เพื่อพัฒนาทักษะการสื่อสารแล้ว ความคิดเห็นจากคุณจะเป็นกุญแจสำคัญที่นำเราไปสู่การพัฒนา เพื่อดูแลผู้ป่วยอย่างยั่งยืน
                  </Card.Text>
                  <Button variant="green" onClick={() => navigate("/sharing/")}>
                    Discover more {"-->"}
                  </Button>
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
};
export default SheetTwo;
