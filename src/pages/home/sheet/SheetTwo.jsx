

import React, { Component } from "react";
import { Container, Card, Button } from 'react-bootstrap';

class SheetTwo extends Component {
  render() {
    return (
      <div className="sheet-two">
        <Container fluid className="p-0" style={{ backgroundImage: `url("image/slideSharing.svg")` }}>
          <Card className="sharing">
            <Card.Body>
              <Card.Title>Hope Sharing</Card.Title>
              <Card.Subtitle>แบ่งปันประสบการณ์</Card.Subtitle>
              <div className="text-50">
                <Card.Text>
                  Short describtion about Hope Sharing
                  .......
                  </Card.Text>
              </div>
              <div className="btn-green">
                <Button variant="green">Discover more {'-->'}</Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
};
export default SheetTwo;

