
import React from "react";
import { Container, Row, Col, Pagination, Card, } from "react-bootstrap";
import { NavLink, } from "react-router-dom";

const GalleryCard = () => {

  return (
    <Container className="detail">
      <Row className="py-5">
        <Col lg="3" md="4" sm="6" className="mb-5">
          <NavLink to="/gallery/album" className="nav-link">
            <Card className="box-card-shadow">
              <Card.Body className="image">
                <Card.Img
                  src="image/image7.png"
                  alt=""
                  className="card-img-top"
                />
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก
              </Card.Title>
                <Card.Text className="subtitle-text">
                  Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                  amet consecteturLorem ipsum dolor sit amet consecteturLorem
                  ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                  consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                  dolor sit amet consecteturLorem ipsum dolor sit amet
                  consecteturLorem ipsum dolor sit amet consectetur
              </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text className="mr-auto">
                  <span className="d-flex justify-content-between">
                    <span style={{ color: "#26BEB4" }}>
                      READ MORE
                  </span>
                    <span>
                      <i className="fa fa-heart-o"></i> 112
                        </span>
                  </span>
                </Card.Text>
              </Card.Footer>
            </Card>
          </NavLink>
        </Col>
      </Row>

      <div>
        <Pagination className="my-5" style={{ float: "right" }}>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item active>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </Container>
  );
}

export default GalleryCard;
