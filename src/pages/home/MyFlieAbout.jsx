import React, { Component } from "react";
import { Container, Row, Col, Card, Image, Media, ListGroup, Button } from 'react-bootstrap';

class MyFlieAbout extends Component {
  render() {
    return (
      <Container fluid className="home-file-about" >
        <Image className="file-about" src="/image/fileabout.svg" />
        <Container fluid className="my-file while" >
          <div className="tab-script">
            our Innovation
          </div>
          <div className="sheet-one">
            <Row className="m-0">
              <Col lg="6">
                <Media as="li">
                  <Card.Title>4</Card.Title>
                  <Media.Body>
                    <div>INNOVATIONS</div>
                    <div>IN BPSC</div>
                  </Media.Body>
                </Media>
                <div className="subtitle">
                  Short describtion about innovation
                </div>
                <div className="subtitle">
                  ......
                </div>
              </Col>
              <Col lg="6" className="pr-0 m-0">
                <Row className="p-0 m-0">
                  <Col lg="6" >
                    <ListGroup horizontal>
                      <ListGroup.Item className="start">
                        {/* <Image src="/image/myfileabout.svg"/> */}
                      </ListGroup.Item>
                      <ListGroup.Item className="end">Short describtion about innovation!</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col lg="6" >
                    <ListGroup horizontal>
                      <ListGroup.Item className="start">
                        {/* <Image src="/image/myfileabout.svg"/> */}
                      </ListGroup.Item>
                      <ListGroup.Item className="end">Short describtion about innovation!</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col lg="6" >
                    <ListGroup horizontal>
                      <ListGroup.Item className="start">
                        {/* <Image src="/image/myfileabout.svg"/> */}
                      </ListGroup.Item>
                      <ListGroup.Item className="end">Short describtion about innovation!</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col lg="6" >
                    <ListGroup horizontal>
                      <ListGroup.Item className="start">
                        {/* <Image src="/image/myfileabout.svg"/> */}
                      </ListGroup.Item>
                      <ListGroup.Item className="end">Short describtion about innovation!</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="sheet-two">
            <Container fluid className="p-0" style={{ backgroundImage: `url("image/slideSharing.svg")` }}>
              <Card className="sharing">
                <Card.Body>
                  <Card.Title>Hope Sharing</Card.Title>
                  <Card.Subtitle>ระบบสาธารณะสุขที่เราวาดฝัน</Card.Subtitle>
                  <div className="text-50">
                    <Card.Text>
                      Short describtion about Hope Sharing
                      .......
                    </Card.Text>
                  </div>

                  <div className="text-left">
                    <Button variant="success">Discover more {'>'}</Button>
                  </div>
                </Card.Body>
              </Card>
            </Container>
          </div>
          <div className="sheet-three">
            <Row className="m-0">
              <Col lg="3" md="6" mb="4" xs="1">
                <Card>
                  <Card.Body className="image">
                    <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>
                      Sunset
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6" mb="4" xs="1">
                <Card>
                  <Card.Body className="image">
                    <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>
                      Sunset
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6" mb="4" xs="1">
                <Card>
                  <Card.Body className="image">
                    <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>
                      Sunset
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6" mb="4" xs="1">
                <Card>
                  <Card.Body className="image">
                    <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>
                      Sunset
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>

        <Container fluid className="my-file green" >
          <div className="tab-script">
            our Mission
          </div>
          <div className="sheet-one">
            <Row className="m-0">
              <Col lg="6">
                <Media as="li">
                  <Card.Title>4</Card.Title>
                  <Media.Body>
                    <div>INNOVATIONS</div>
                    <div>IN BPSC</div>
                  </Media.Body>
                </Media>
                <div className="subtitle">
                  Short describtion about innovation
                </div>
                <div className="subtitle">
                  ......
                </div>
              </Col>
              <Col lg="6" className="pr-0 m-0">
                <Row className="p-0 m-0">
                  <Col lg="6" >
                    <ListGroup horizontal>
                      <ListGroup.Item className="start">
                        {/* <Image src="/image/myfileabout.svg"/> */}
                      </ListGroup.Item>
                      <ListGroup.Item className="end">Short describtion about innovation!</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col lg="6" >
                    <ListGroup horizontal>
                      <ListGroup.Item className="start">
                        {/* <Image src="/image/myfileabout.svg"/> */}
                      </ListGroup.Item>
                      <ListGroup.Item className="end">Short describtion about innovation!</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col lg="6" >
                    <ListGroup horizontal>
                      <ListGroup.Item className="start">
                        {/* <Image src="/image/myfileabout.svg"/> */}
                      </ListGroup.Item>
                      <ListGroup.Item className="end">Short describtion about innovation!</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col lg="6" >
                    <ListGroup horizontal>
                      <ListGroup.Item className="start">
                        {/* <Image src="/image/myfileabout.svg"/> */}
                      </ListGroup.Item>
                      <ListGroup.Item className="end">Short describtion about innovation!</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="sheet-two">
            <Container fluid className="p-0" style={{ backgroundImage: `url("image/slideSharing.svg")` }}>
              <Card className="sharing">
                <Card.Body>
                  <Card.Title>Hope Sharing</Card.Title>
                  <Card.Subtitle>ระบบสาธารณะสุขที่เราวาดฝัน</Card.Subtitle>
                  <div className="text-50">
                    <Card.Text>
                      Short describtion about Hope Sharing
                      .......
                    </Card.Text>
                  </div>

                  <div className="text-left">
                    <Button variant="success">Discover more {'>'}</Button>
                  </div>
                </Card.Body>
              </Card>
            </Container>
          </div>
          <div className="sheet-three">
            <Row className="m-0">
              <Col lg="3" md="6" mb="4" xs="1">
                <Card>
                  <Card.Body className="image">
                    <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>
                      Sunset
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6" mb="4" xs="1">
                <Card>
                  <Card.Body className="image">
                    <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>
                      Sunset
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6" mb="4" xs="1">
                <Card>
                  <Card.Body className="image">
                    <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>
                      Sunset
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6" mb="4" xs="1">
                <Card>
                  <Card.Body className="image">
                    <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>
                      Sunset
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    );
  }
};
export default MyFlieAbout;