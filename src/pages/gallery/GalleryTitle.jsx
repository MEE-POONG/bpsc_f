import React from "react";
import {Container, Card, Row, Col} from "react-bootstrap";
const GalleryTitle = () => {
  return (
    <Container className="title mb-5">
      <Row>
        <Col lg="12">
          <Card.Title>Gallery</Card.Title>
          <Card.Title>Blog</Card.Title>
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryTitle;
