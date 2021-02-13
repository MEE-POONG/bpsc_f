import React from "react";
import {Col, Container, Image, Row, Card} from "react-bootstrap";

const AboutTeam = () => {
  return (
    <div className="about-team">
      <div className="scroll-num py-5 about-team-bg">
        <p className="h1 font-weight-bold text-center">the team</p>
        <div class="row">
          <div class="col-6">
            <Container className="text-center">
              <Image src="/image/image45.png" className="about-team-circle" />
              <p className="h4 font-weight-bold pt-3 text-center">Name Surname Admin</p>
            </Container>
          </div>
          <div class="col-6 center" style={{alignSelf: "center"}}>
            <Card.Text className="team-subtitle">
                "Waiting for quote"
            </Card.Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutTeam;
