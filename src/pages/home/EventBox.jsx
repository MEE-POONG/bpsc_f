import React, { Component } from "react";
import { Container, Card } from 'react-bootstrap';


class EventBox extends Component {
  render() {
    return (
      <div className="event">
        <Container>
              <Card classname="flip-card-front">

              </Card>
              <Card class="flip-card-back">
                <Card.Title>E - Learning</Card.Title>
                <Card.Text>
                  Short describtion about E-learning
                  .......
                </Card.Text>
              </Card>

          <div class="flip-card">
            <div class="flip-card-inner">

              <div class="flip-card-front">
                <img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg" alt="Avatar" />
              </div>

              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect ฐ Engineer</p>
                <p>We love that guy</p>
              </div>

            </div>
          </div>
        </Container>

      </div>

    );
  }
};

export default EventBox;
