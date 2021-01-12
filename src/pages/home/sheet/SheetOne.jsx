import React, { Component } from "react";
import { Row, Col, Card, Media, ListGroup, Image } from "react-bootstrap";

class SheetOne extends Component {
  render() {
    return (
      <div className="sheet-one">
        <Row className="m-0">
          <Col lg="6">
            <Media as="li">
              <Card.Title>4</Card.Title>
              <Media.Body>
                <div>INNOVATIONS</div>
                <div>IN BPSC</div>
              </Media.Body>
            </Media>
            <div className="subtitle">SHORT DESCRIPTION ABOUT INNOVATION</div>
            <div className="subtitle">......</div>
          </Col>
          <Col lg="6" className="pr-0 m-0">
            <Row className="p-0 m-0">
              <Col lg="6">
                <ListGroup horizontal>
                  <ListGroup.Item className="start"style={{ backgroundColor: '#E5E5E5'}}>
                    <center class="align-self-center pt-3">
                      <Image src="/image/advice1.png" width="60px" />
                      <br />
                      <p style={{ fontSize: "x-small", margin: "unset" }}>
                        BRIEF ADVICE
                      </p>
                      <p style={{ fontSize: "x-small", margin: "unset" }}>
                        (BA)
                      </p>
                    </center>
                  </ListGroup.Item>
                  <ListGroup.Item className="end" style={{ fontSize: "12px" }}>
                    SHORT DESCRIPTION ABOUT INNOVATION!
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg="6">
                <ListGroup horizontal>
                  <ListGroup.Item className="start" style={{ backgroundColor: '#E5E5E5'}}>
                    <center class="align-self-center pt-3">
                      <Image src="/image/together1.png" width="60px" />
                      <br />
                      <p style={{ fontSize: "x-small", margin: "unset" }}>
                        BRIEF ADVICE
                      </p>
                      <p style={{ fontSize: "x-small", margin: "unset" }}>
                        (BA)
                      </p>
                    </center>
                  </ListGroup.Item>
                  <ListGroup.Item className="end" style={{ fontSize: "12px" }}>
                    SHORT DESCRIPTION ABOUT INNOVATION!
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg="6">
                <ListGroup horizontal>
                  <ListGroup.Item className="start"style={{ backgroundColor: '#E5E5E5'}}>
                    <center class="align-self-center pt-3">
                      <Image src="/image/patches1.png" width="60px" />
                      <br />
                      <p style={{ fontSize: "x-small", margin: "unset" }}>
                        BRIEF ADVICE
                      </p>
                      <p style={{ fontSize: "x-small", margin: "unset" }}>
                        (BA)
                      </p>
                    </center>
                  </ListGroup.Item>
                  <ListGroup.Item className="end" style={{ fontSize: "12px" }}>
                    SHORT DESCRIPTION ABOUT INNOVATION!
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg="6">
                <ListGroup horizontal>
                  <ListGroup.Item className="start"style={{ backgroundColor: '#E5E5E5'}}>
                    <center class="align-self-center pt-3">
                      <Image src="/image/medical-report1.png" width="60px" />
                      <br />
                      <p style={{ fontSize: "x-small", margin: "unset" }}>
                        BRIEF ADVICE
                      </p>
                      <p style={{ fontSize: "x-small", margin: "unset" }}>
                        (BA)
                      </p>
                    </center>
                  </ListGroup.Item>
                  <ListGroup.Item className="end" style={{ fontSize: "12px" }}>
                    SHORT DESCRIPTION ABOUT INNOVATION!
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default SheetOne;
