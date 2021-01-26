import React, {Component} from "react";
import {Row, Col, Card, Image, Container} from "react-bootstrap";

class SheetOne extends Component {
  render() {
    return (
      <div className="sheet-one">
        <div className="file-green">
          <div className="row m-0">
            <button className="trapezoid">
              <span>OUR INNOVATION</span>
            </button>
            <button className="trapezoid back">
              <span>OUR INNOVATION</span>
            </button>
          </div>
          <Container style={{display: "none"}}>
            <Row className="m-0">
              <Col lg="6">
                <Card.Title>4 INNOVATIONS IN BPSC</Card.Title>
                <div className="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore ..
                </div>
              </Col>
              <Col lg="6" className="box-set">
                <Row>
                  <Col lg="6" md="6" xs="6" className="pt-3">
                    <Card>
                      <center className="align-self-center p-1">
                        <Image src="/image/advice1.png" />
                        <br />
                        <p style={{fontSize: "x-small", margin: "unset"}}>BRIEF ADVICE</p>
                        <p style={{fontSize: "x-small", margin: "unset"}}>(BA)</p>
                      </center>
                    </Card>
                  </Col>
                  <Col lg="6" md="6" xs="6" className="pt-3">
                    <Card>
                      <center className="align-self-center p-1">
                        <Image src="/image/together1.png" />
                        <br />
                        <p style={{fontSize: "x-small", margin: "unset"}}>BRIEF ADVICE</p>
                        <p style={{fontSize: "x-small", margin: "unset"}}>(BA)</p>
                      </center>
                    </Card>
                  </Col>
                  <Col lg="6" md="6" xs="6" className="pt-3">
                    <Card>
                      <center className="align-self-center p-1">
                        <Image src="/image/patches1.png" />
                        <br />
                        <p style={{fontSize: "x-small", margin: "unset"}}>BRIEF ADVICE</p>
                        <p style={{fontSize: "x-small", margin: "unset"}}>(BA)</p>
                      </center>
                    </Card>
                  </Col>
                  <Col lg="6" md="6" xs="6" className="pt-3">
                    <Card>
                      <center className="align-self-center p-1">
                        <Image src="/image/medical-report1.png" />
                        <br />
                        <p style={{fontSize: "x-small", margin: "unset"}}>BRIEF ADVICE</p>
                        <p style={{fontSize: "x-small", margin: "unset"}}>(BA)</p>
                      </center>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="file-green back">
          <Container>
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
                        <p style={{fontSize: "x-small", margin: "unset"}}>BASED BRIEF INTERVENTION</p>
                        <p style={{fontSize: "x-small", margin: "unset"}}>(MBBI)</p>
                      </center>
                    </Card>
                  </Col>
                  <Col lg="6" md="6" xs="6" className="pt-3">
                    <Card>
                      <center className="align-self-center p-1">
                        <Image src="/image/together1.png" />
                        <br />
                        <p style={{fontSize: "x-small", margin: "unset"}}>MINDFULNESS BASED THERAPY COUNSELING</p>
                        <p style={{fontSize: "x-small", margin: "unset"}}>(MBTC)</p>
                      </center>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default SheetOne;
