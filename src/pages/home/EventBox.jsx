import React, { Component } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
class EventBox extends Component {
  render() {
    return (
      <div className="event">
        <Container>
          <div className="text-left">
            <Card.Title >Up coming events</Card.Title >
          </div>
          <Row className="m-0 my-5 card-day">
            <Col lg="3" md="6" mb="4" xs="1" >
              <Card className="bg-1">
                <Card.Body>
                  <Card.Title>
                    08
                    </Card.Title>
                  <Card.Subtitle>
                    JUNE
                    </Card.Subtitle>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6" mb="4" xs="1">
            <Card  className="bg-2">
                <Card.Body>
                  <Card.Title>
                    8
                    </Card.Title>
                  <Card.Subtitle>
                    JUNE
                    </Card.Subtitle>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6" mb="4" xs="1">
            <Card  className="bg-3">
                <Card.Body>
                  <Card.Title>
                    8
                    </Card.Title>
                  <Card.Subtitle>
                    JUNE
                    </Card.Subtitle>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6" mb="4" xs="1" >
            <Card className="bg-4">
                <Card.Body>
                  <Card.Title>
                    8
                    </Card.Title>
                  <Card.Subtitle>
                    JUNE
                    </Card.Subtitle>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
};

export default EventBox;
