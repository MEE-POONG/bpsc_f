import React, { Component } from "react";
import { Container, Card, Button } from 'react-bootstrap';


class SlideTitle extends Component {
  render() {
    return (
      <Container
        fluid
        className="home-image text-uppercase"
        style={{ backgroundImage: `url("image/slide.svg")` }}
      >
        <Card>
          <Card.Body>
            <Card.Title as="h1">ระบบสาธารณะสุขที่เราวาดฝัน</Card.Title>
            <Card.Text style={{ color: "#000" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="text-center">
              <Button variant="success">MODE ABOUT US BPSC</Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default SlideTitle;
