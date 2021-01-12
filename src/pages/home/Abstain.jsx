import React, { Component } from "react";
import { Container, Card } from 'react-bootstrap';


class Abstain extends Component {
  render() {
    return (
      <div className="abstain">
        <Container fluid>
          <Card >
            <Card.Body >
              <Card.Title style={{color: "#000"}}>E - LEARNING</Card.Title>
              <Card.Text style={{color: "#000"}}>
                SHORT DESCRIPTION ABOUT <br />
                E-LEARNING .......
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
};

export default Abstain;
