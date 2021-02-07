import React, {useState, useEffect} from "react";
import {Container, Card, Row, Col, Pagination, Media} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {faArrowRight, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {API_GET_LEARNING, IMAGE_URL} from "../../apis";
import moment from "moment";
import {useNavigate} from "react-router-dom";

const LeaningDetail = () => {
  const navigate = useNavigate();

  const [learning, setLearning] = useState(null);
  useEffect(() => {
    API_GET_LEARNING().then((result) => {
      setLearning(result?.data);
    });
  }, []);

  return (
    <Container className="detail learning">
      <Row>
        <Col xs="12" lg="12">
          <Card.Subtitle className="scroll">123 E-learning</Card.Subtitle>
        </Col>
      </Row>{" "}
      <Container fluid>
        <Row className="py-5">
          {learning?.data?.map(
            (
              {
                id,
                title,
                view,
                favorite,
                elearningPicture,
                createAt,
                firstName,
                lastName,
                userPicture,
              },
              idx
            ) => (
              <Col xl="3" lg="4" md="6" xs="12" className="mobile-padding py-5">
                {/* <NavLink to={`/e-leaning/${id}`} className="p-0 nav-link"> */}
                <Card>
                  <Card.Body className="image">
                    <img
                      src={
                        elearningPicture
                          ? IMAGE_URL + elearningPicture
                          : "https://chiccarrent.com/files/images/default-placeholder.png"
                      }
                      // style={{height: "359px"}}
                      alt={title}
                      className="card-img-top"
                    />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>{moment(createAt).format("DD")}</Card.Title>
                          <Card.Subtitle>{moment(createAt).format("MMM")}</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{color: "#000"}}>
                              {title}
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    {/* <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consectetur
                    </Card.Text> */}
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto ">
                      <span className="d-flex justify-content-between">
                        <span
                          style={{color: "#26BEB4"}}
                          onClick={() => navigate("/e-leaning/" + id)}
                        >
                          READ MORE <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                        <span style={{color: "#26BEB4"}}>
                          <FontAwesomeIcon icon={faHeart} /> {favorite}
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
                {/* </NavLink> */}
              </Col>
            )
          )}
        </Row>
      </Container>
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

export default LeaningDetail;
