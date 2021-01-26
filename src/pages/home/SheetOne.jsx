import React, {useState} from "react";
import {Row, Col, Card, Image, Container} from "react-bootstrap";

const SheetOne = () => {
  const [chkInnovation, setChkInnovation] = useState(true);
  const setIn = () => setChkInnovation(false);
  const setOur = () => setChkInnovation(true);
  const inInnovation = (
    <Row className="m-0">
      <Col lg="6" style={{alignSelf: "center"}}>
        <Card.Title>IN VALUES</Card.Title>
        <Card.Text style={{fontSize: "15px"}}>
          <br></br>
          1. การให้คำแนะนำแบบสั้น (Brief Advice, BA)<br></br>
          2. การให้คำแนะนำเพื่อประเมินผู้ป่วย (Brief Intervention, BI)<br></br>
          3. การฝึกสติแบบสั้น (Mindfulness Based Brief Intervention, MBBI)<br></br>
          4. การฝึกสติบำบัด (Mindfulness Based Therapy Counseling, MBTC)<br></br>
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
  const ourInnovation = (
    <Row className="m-0">
      <Col lg="6" style={{alignSelf: "center"}}>
        <Card.Title>OUR VALUES</Card.Title>
        <Card.Text style={{fontSize: "15px"}}>
          <br></br>
          1. การให้คำแนะนำแบบสั้น (Brief Advice, BA)<br></br>
          2. การให้คำแนะนำเพื่อประเมินผู้ป่วย (Brief Intervention, BI)<br></br>
          3. การฝึกสติแบบสั้น (Mindfulness Based Brief Intervention, MBBI)<br></br>
          4. การฝึกสติบำบัด (Mindfulness Based Therapy Counseling, MBTC)<br></br>
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
            <span>IN INNOVATION</span>
          </button>
          <button className={`trapezoid ${!chkInnovation && "back"}`} onClick={setOur}>
            <span>OUR INNOVATION</span>
          </button>
        </div>
      </div>

      <div className="file-green back">
        <Container>{chkInnovation ? ourInnovation : inInnovation}</Container>
      </div>
    </div>
  );
};
export default SheetOne;
