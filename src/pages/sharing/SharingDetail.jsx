import React, {useState, useEffect} from "react";
import {Container, Card, Row, Col, Image, Pagination} from "react-bootstrap";
import {API_GET_SHARING, IMAGE_URL} from "../../apis";

const SharingDetail = () => {
  const [sharing, setSharing] = useState(null);
  useEffect(() => {
    API_GET_SHARING().then((result) => {
      setSharing(result?.data);
    });
  }, []);
  return (
    <Container className="detail">
      <Row>
        <Col xs="12" lg="12">
          <Card.Subtitle className="scroll">152 Sharing</Card.Subtitle>
        </Col>
      </Row>
      <Row className="py-5">
        {sharing?.data?.map(
          ({
            id,
            title,
            view,
            favorite,
            sharingPicture,
            firstName,
            lastName,
            userPicture,
          }) => (
            <Col lg="3" md="4" sm="6" className="mb-5" key={id}>
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img
                    src={
                      sharingPicture
                        ? IMAGE_URL + sharingPicture
                        : "https://chiccarrent.com/files/images/default-placeholder.png"
                    }
                    alt={title}
                    className="card-img-top"
                  />
                </Card.Body>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  {/* <Card.Text className="subtitle-text">''</Card.Text> */}
                </Card.Body>
                <Card.Footer>
                  <div className="user">
                    <span className="mr-1">
                      <Image
                        roundedCircle
                        src={
                          userPicture
                            ? IMAGE_URL + userPicture
                            : "https://chiccarrent.com/files/images/default-placeholder.png"
                        }
                        alt={title}
                        className="card-img-top"
                      />
                    </span>
                    <span className="pl-1">
                      {firstName} {lastName}
                    </span>
                  </div>
                  <div>
                    <span className="mr-1">
                      <i className="fa fa-eye"></i> {view}
                    </span>
                    <span>
                      <i className="fa fa-comments-o"></i> {favorite}
                    </span>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          )
        )}
      </Row>
      <div>
        <Pagination className="my-5" style={{float: "right"}}>
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
};

export default SharingDetail;
