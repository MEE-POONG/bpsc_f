import React, {useState} from "react";
import {Row, Col, Card, Image, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const SheetOne = () => {
  const navigate = useNavigate();

  const [chkInnovation, setChkInnovation] = useState(false);
  const setIn = () => setChkInnovation(false);
  const setOur = () => setChkInnovation(true);
  const ourValue = (
    <Row className="m-0">
      <Col lg="6" style={{alignSelf: "center"}}>
        <Card.Title>MISSION</Card.Title>
        <Card.Text style={{fontSize: "18px"}}>
          <br />
          เราสร้าง BPSC ซึ่งเป็นนวัตกรรมการดูแลผู้ป่วยแบบใหม่
          ที่จะทำให้เกิดความร่วมมือในการแก้ปัญหา นำไปสู่ทางออก
          เป็นการรักษาผู้ป่วยทั้งกายและใจ โดยเน้นผู้ป่วยกลุ่มโรคไม่ติดต่อเรื้อรัง
          มีปัญหาสุขภาพจิต และติดสารเสพติด ผ่านการสร้าง 4 ระบบหลัก
        </Card.Text>
      </Col>
      <Col lg="6" className="pt-3">
        <Card style={{marginBottom: "1rem"}}>
          <center className="align-self-center p-1">
            <Card.Text>1. การคัดกรองและสร้างแรงจูงใจ</Card.Text>
          </center>
        </Card>
        <Card style={{marginBottom: "1rem"}}>
          <center className="align-self-center p-1">
            <Card.Text>2. การช่วยเหลือกลุ่มเสี่ยง</Card.Text>
          </center>
        </Card>
        <Card style={{marginBottom: "1rem"}}>
          <center className="align-self-center p-1">
            <Card.Text>3. การดูแลสังคมจิตใจ</Card.Text>
          </center>
        </Card>
        <Card>
          <center className="align-self-center p-1">
            <Card.Text>4. การจัดการระบบในชุมชน</Card.Text>
          </center>
        </Card>
      </Col>
    </Row>
  );
  const ourInnovation = (
    <Row className="m-0">
      <Col lg="6" style={{alignSelf: "center"}}>
        <Card.Title>INNOVATION</Card.Title>
        <Card.Text style={{fontSize: "18px"}}>
          <br></br>
          “ชมเป็น ถามเป็น แนะเป็น”<br></br>
          หนึ่งในนวัตกรรมหลักของ BPSC
        </Card.Text>
        <Card.Text style={{fontSize: "15px"}}>
          <br></br>
          1. การให้คำแนะนำแบบสั้น ชม ถาม แนะนำ เป็น (Brief Advice: BA)<br></br>
          2. การให้คำปรึกษาแบบสั้น ประเมิน ปรึกษา เป็น (Brief Intervention: BI)<br></br>
          3. การฝึกสติแบบสั้น ชม ถาม แนะนำ (Mindfulness Based Brief Intervention: MBBI)
          <br></br>
          4. การฝึกสติบำบัด (Mindfulness Based Therapy and Counseling: MBTC)<br></br>
        </Card.Text>
      </Col>
      <Col lg="6" className="box-set" style={{color: "black"}}>
        <Row>
          <Col lg="6" md="6" xs="6" className="pt-3">
            <Card>
              <center className="align-self-center p-1">
                <Image src="/image/healthcare.png" />
                <br />
                <p style={{fontSize: "x-small", margin: "unset"}}>BRIEF ADVICE</p>
                <p style={{fontSize: "x-small", margin: "unset"}}>(BA)</p>
              </center>
            </Card>
          </Col>
          <Col lg="6" md="6" xs="6" className="pt-3">
            <Card>
              <center className="align-self-center p-1">
                <Image src="/image/healthcare-2.png" />
                <br />
                <p style={{fontSize: "x-small", margin: "unset"}}>BRIEF INTERVENTION</p>
                <p style={{fontSize: "x-small", margin: "unset"}}>(BI)</p>
              </center>
            </Card>
          </Col>
          <Col lg="6" md="6" xs="6" className="pt-3">
            <Card>
              <center className="align-self-center p-1">
                <Image src="/image/love.png" />
                <br />
                <p style={{fontSize: "x-small", margin: "unset"}}>
                  BASED BRIEF INTERVENTION
                </p>
                <p style={{fontSize: "x-small", margin: "unset"}}>(MBBI)</p>
              </center>
            </Card>
          </Col>
          <Col lg="6" md="6" xs="6" className="pt-3">
            <Card>
              <center className="align-self-center p-1">
                <Image src="/image/together1.png" />
                <br />
                <p style={{fontSize: "x-small", margin: "unset"}}>
                  MINDFULNESS BASED THERAPY COUNSELING
                </p>
                <p style={{fontSize: "x-small", margin: "unset"}}>(MBTC)</p>
              </center>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
  return (
    <div className="sheet-one">
      <div className="file-green">
        <div className="row m-0">
          <button className={`trapezoid ${chkInnovation && "back"}`} onClick={setIn}>
            <span>MISSION</span>
          </button>
          <button className={`trapezoid ${!chkInnovation && "back"}`} onClick={setOur}>
            <span>INNOVATION</span>
          </button>
        </div>
      </div>

      <div className="file-green back">
        <Container>{chkInnovation ? ourInnovation : ourValue}</Container>
      </div>
    </div>
  );
};
export default SheetOne;
