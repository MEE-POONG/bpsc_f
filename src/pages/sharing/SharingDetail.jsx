
import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
const SharingDetail = () => {
    return (
        <Container className="detail">
            <Row>
                <Col lg="3">
                <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img
                    src="image/image7.png"
                    alt=""
                    class="card-img-top"
                  />
                </Card.Body>
                <Card.Body>
                  <Card.Title>
                    HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก
                  </Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consectetur
                  </Card.Text>
                  <div className="user">
                    <span className="mr-1">
                      <Image
                        roundedCircle
                        src="image/image6.png"
                        alt=""
                        class="card-img-top"
                      />
                    </span>
                    <span class="pl-1">user</span>
                  </div>
                  <div>
                    <span className="mr-1">
                      <i class="fa fa-eye"></i> 7998
                    </span>
                    <span>
                      <i class="fa fa-comments-o"></i> 30{" "}
                    </span>
                  </div>
                </Card.Body>
              </Card>
                </Col>
               
            </Row>
        </Container>
    );
}

export default SharingDetail;
