import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ProfileMenuFolder = () => {
  return (
    <div className="profile-title-menu-my-share text-uppercase">
      <div className="profile-title-menu-my-share-bg scroll-num py-5">
        <Container>
          <Row className="py-5">
            <Card className="box-card-shadow border-radius-25">
              <Card.Body className="image">
                <Row>
                  <Col lg="4">
                    <Card.Img
                      src="image/image7.png"
                      alt=""
                      class="card-img-top"
                    />
                  </Col>
                  <Col lg="8">
                    <div className="float-right h4 pt-2">5 ชั่วโมงที่แล้ว</div>
                    <Card.Title className="pt-5 font-weight-bold">
                      HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                    <div className="pt-5 about-talk-with-us-btn-right">
                      <button
                        type="button"
                        className="btn btn-danger about-talk-with-us-btn-danger "
                      >
                        Danger
                      </button>
                      <button
                        type="button"
                        className="btn btn-success about-talk-with-us-btn-success"
                      >
                        Success
                      </button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProfileMenuFolder;
