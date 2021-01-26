import React, {Component} from "react";
import {Container, Card, Button} from "react-bootstrap";

import Learning from "./Learning";
class Abstain extends Component {
  render() {
    return (
      <div className="abstain text-uppercase text-center">
        <Container fluid>
          <Card className="bg-abstain">
            <Card.Body className="p-sm-3">
              <Card.Title style={{color: "#000"}}>E - LEARNING</Card.Title>
              <Container>
                <Card.Text style={{color: "#000",textAlign:"justify"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore ...
                  <div className="pt-5 text-center">
                    <Button variant="success">MODE ABOUT US BPSC</Button>
                  </div>
                </Card.Text>
              </Container>
              <Learning />
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Abstain;
