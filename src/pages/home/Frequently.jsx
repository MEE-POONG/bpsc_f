import React, { useState, useEffect } from "react";
import { Accordion, Container, ListGroup, Button, Card, Image } from "react-bootstrap";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { API_GET_FAQ } from "../../apis";
const Frequently = () => {
  const [faqData, setFaqData] = useState(null);
  useEffect(() => {
    API_GET_FAQ().then((result) => {
      setFaqData(result?.data);
    });
  }, []);
  return (
    <div className="home-faq text-uppercase">
      <Container fluid className="m-0 p-0">
        <ListGroup horizontal >
          <ListGroup.Item
            className="start hide-short-desc"
            style={{ width: "50%", position: "relative" }}
          >
            <Image src="/image/home/Frequently.png" style={{ objectFit: "contain", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item className="end" style={{ width: "50%", position: "relative" }}>
            <Card.Title className="f-gradient">
              FAQ
            </Card.Title>
            <Accordion>
              <Card>
                <Card.Header className="d-flex">
                  <Card.Title bsPrefix="title">
                    hOW DO WE TREAT  OUR MEDICINES?
                  </Card.Title>
                  <Accordion.Toggle bsPrefix="btn-faq" as={Button} variant="link" eventKey="0">
                    <FontAwesomeIcon className="" icon={faPlus} />
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header className="d-flex">
                  <Card.Title bsPrefix="title">
                    hOW DO WE TREAT  OUR MEDICINES?
                  </Card.Title>
                  <Accordion.Toggle bsPrefix="btn-faq" as={Button} variant="link" eventKey="1">
                    <FontAwesomeIcon className="" icon={faMinus} />
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
};

export default Frequently;
