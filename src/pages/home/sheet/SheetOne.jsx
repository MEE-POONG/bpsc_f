

import React, { Component } from "react";
import { Row, Col, Card, Media, ListGroup } from 'react-bootstrap';

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
            <div className="subtitle">
              Short describtion about innovation
              </div>
            <div className="subtitle">
              ......
              </div>
          </Col>
          <Col lg="6" className="pr-0 m-0">
            <Row className="p-0 m-0">
              <Col lg="6" >
                <ListGroup horizontal>
                  <ListGroup.Item className="start">
                    {/* <Image src="/image/myfileabout.svg"/> */}
                  </ListGroup.Item>
                  <ListGroup.Item className="end">Short describtion about innovation!</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg="6" >
                <ListGroup horizontal>
                  <ListGroup.Item className="start">
                    {/* <Image src="/image/myfileabout.svg"/> */}
                  </ListGroup.Item>
                  <ListGroup.Item className="end">Short describtion about innovation!</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg="6" >
                <ListGroup horizontal>
                  <ListGroup.Item className="start">
                    {/* <Image src="/image/myfileabout.svg"/> */}
                  </ListGroup.Item>
                  <ListGroup.Item className="end">Short describtion about innovation!</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg="6" >
                <ListGroup horizontal>
                  <ListGroup.Item className="start">
                    {/* <Image src="/image/myfileabout.svg"/> */}
                  </ListGroup.Item>
                  <ListGroup.Item className="end">Short describtion about innovation!</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
};
export default SheetOne;