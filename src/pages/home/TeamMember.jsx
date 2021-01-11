import React, { Component } from "react";
import { Container, Card, Row, Col, Button } from 'react-bootstrap';


class TeamMember extends Component {
  render() {
    return (
      <div className="team">
        <Container fluid >
          <Card classname="text-center">
            <Card.Body>
              <Card.Subtitle>
                our team members
              </Card.Subtitle>
              <Card.Title>
                we have quality complete expert
              </Card.Title>
              <Card.Title>
                reviews in our program
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...
            </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <div class="profile-card-2">
                <img class="img img-responsive" src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg" />
                <div class="profile-name">JOHN DOE</div>
                <div class="profile-username">@johndoesurname</div>
                <div class="profile-icons">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div class="profile-card-2">
                <img class="img img-responsive" src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg" />
                <div class="profile-name">JOHN DOE</div>
                <div class="profile-username">@johndoesurname</div>
                <div class="profile-icons">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div class="profile-card-2">
                <img class="img img-responsive" src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg" />
                <div class="profile-name">JOHN DOE</div>
                <div class="profile-username">@johndoesurname</div>
                <div class="profile-icons">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div class="profile-card-2">
                <img class="img img-responsive" src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg" />
                <div class="profile-name">JOHN DOE</div>
                <div class="profile-username">@johndoesurname</div>
                <div class="profile-icons">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="success">MODE ABOUT US BPSC</Button>
          </div>
        </Container >
      </div >

    );
  }
};

export default TeamMember;
