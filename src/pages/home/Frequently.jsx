import React, { Component } from "react";
import { Container, ListGroup, Button, Image, Card } from 'react-bootstrap';


class Frequently extends Component {
    render() {
        return (
          <div className="frequently">
            <Container fluid className="m-0 p-0">
              <ListGroup horizontal>
                <ListGroup.Item






                                                                                                                        className="start"






                                                                                                                        style={{
                    
                    
                    
                    
                    
                    
                    backgroundImage: "url('/image/frequently-doctor.svg')"
                  }}
                
                
                
                
                
                
                >
                  {/* <Image
                    src="/image/frequently-doctor.svg"
                    // width="614.39"
                    // height="426"
                    style={{ objectFit: 'cover'}}
                  /> */}
                </ListGroup.Item>
                <ListGroup.Item className="end">
                  <Card>
                    <Card.Body>
                      <Card.Title>FREQUENTLY ASKED QUESTIONS</Card.Title>
                      <Card.Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore ...
                      </Card.Subtitle>
                      <Button>hOW DO WE TREAT OUR MEDICINES?</Button>
                      <Card.Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore ...
                      </Card.Subtitle>
                      <Card.Text>bEARS DENTAL CLINIC FRIENDLY STUFF?</Card.Text>
                      <Card.Text>bEARS DENTAL CLINIC FRIENDLY STUFF?</Card.Text>
                      <Card.Text>bEARS DENTAL CLINIC FRIENDLY STUFF?</Card.Text>
                      <Card.Text>bEARS DENTAL CLINIC FRIENDLY STUFF?</Card.Text>
                      <Card.Text>bEARS DENTAL CLINIC FRIENDLY STUFF?</Card.Text>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
              </ListGroup>
            </Container>
          </div>
        );
    }
};

export default Frequently;
