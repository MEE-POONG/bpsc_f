import React, { Component } from "react";
import { Container, Card } from 'react-bootstrap';


class Abstain extends Component {
  render() {
    return (
      <div className="abstain">
        <Container fluid >
          <Card classname="">
            <Card.Body>
              <Card.Title>E - Learning</Card.Title>
              <Card.Text>
                Short describtion about E-learning
                .......
            </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>

    );
  }
};

export default Abstain;
