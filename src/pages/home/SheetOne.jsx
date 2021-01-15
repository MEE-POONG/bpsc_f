import React, { Component } from "react";
import { Row, Col, Card, Media, ListGroup, Image, Container } from "react-bootstrap";

class SheetOne extends Component {
  render() {
    return (
      <div className="sheet-one mt-5">
        <div className="file-green">
          <button className="trapezoid">
            <span>Our INNOVATION</span>
          </button>
          <Container>
            <Row className="m-0">
              <Col lg="6">
                <Card.Title>4 INNOVATIONS IN BPSC</Card.Title>
                <div className="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...
              </div>
              </Col>
              <Col lg="6">
                <Row>
                  <Col>
                    <Card>
                      <center class="align-self-center p-1">
                        <Image src="/image/advice1.png" />
                        <br />
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          BRIEF ADVICE
                      </p>
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          (BA)
                      </p>
                      </center>
                    </Card>
                  </Col>
                  <Col lg="6">
                    <Card>
                      <center class="align-self-center p-1">
                        <Image src="/image/together1.png" />
                        <br />
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          BRIEF ADVICE
                      </p>
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          (BA)
                      </p>
                      </center>
                    </Card>
                  </Col>
                  <Col lg="6">
                    <Card>
                      <center class="align-self-center p-1">
                        <Image src="/image/patches1.png" />
                        <br />
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          BRIEF ADVICE
                      </p>
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          (BA)
                      </p>
                      </center>
                    </Card>
                  </Col>
                  <Col lg="6">
                    <Card>
                      <center class="align-self-center p-1">
                        <Image src="/image/medical-report1.png" />
                        <br />
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          BRIEF ADVICE
                      </p>
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          (BA)
                      </p>
                      </center>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="file-green back">
          <button className="trapezoid back">
          <span>OUR INNOVATION</span>
          </button>
          <Container>
            <Row className="m-0">
              <Col lg="6">
                <Card.Title>4 INNOVATIONS IN BPSC</Card.Title>
                <div className="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...
              </div>
              </Col>
              <Col lg="6">
                <Row>
                  <Col>
                    <Card>
                      <center class="align-self-center p-1">
                        <Image src="/image/advice1.png" />
                        <br />
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          BRIEF ADVICE
                      </p>
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          (BA)
                      </p>
                      </center>
                    </Card>
                  </Col>
                  <Col lg="6">
                    <Card>
                      <center class="align-self-center p-1">
                        <Image src="/image/together1.png" />
                        <br />
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          BRIEF ADVICE
                      </p>
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          (BA)
                      </p>
                      </center>
                    </Card>
                  </Col>
                  <Col lg="6">
                    <Card>
                      <center class="align-self-center p-1">
                        <Image src="/image/patches1.png" />
                        <br />
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          BRIEF ADVICE
                      </p>
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          (BA)
                      </p>
                      </center>
                    </Card>
                  </Col>
                  <Col lg="6">
                    <Card>
                      <center class="align-self-center p-1">
                        <Image src="/image/medical-report1.png" />
                        <br />
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          BRIEF ADVICE
                      </p>
                        <p style={{ fontSize: "x-small", margin: "unset" }}>
                          (BA)
                      </p>
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
