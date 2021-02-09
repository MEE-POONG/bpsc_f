import React, {useState, useEffect} from "react";
import {Card, Col, Container, Media, Row} from "react-bootstrap";

import {API_GET_ELEARNING_SHARING, IMAGE_URL} from "../../apis";
import moment from "moment";
import {useNavigate} from "react-router-dom";
import {faArrowRight, faHeart, faEye, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProfileMenuLeaning = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [learning, setLearning] = useState(null);
  useEffect(() => {
    API_GET_ELEARNING_SHARING(search, page).then((result) => {
      setLearning(result?.data);
    });
  }, [search, page]);

  return (
    <div className="learning text-uppercase">
      <div className="profile-title-menu-my-share-bg scroll-num py-5">
        <Container fluid>
          <Row>
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
                  content,
                },
                idx
              ) => (
                <Col
                  xl="3"
                  lg="4"
                  md="6"
                  xs="12"
                  className="mobile-padding py-5"
                  onClick={() => navigate("/e-leaning/" + id)}
                >
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
                            <Card.Subtitle>
                              {moment(createAt).format("MMM")}
                            </Card.Subtitle>
                          </Card>
                          <Card className="date">
                            <Card.Title></Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                          </Card>
                          <Media.Body>
                            <p>
                              <b style={{color: "#000"}}>{title}</b>
                            </p>
                          </Media.Body>
                        </Media>
                      </Card.Title>
                      <Card.Text className="subtitle-text">{content}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Card.Text className="mr-auto ">
                        <span className="d-flex justify-content-between">
                          <span style={{color: "#26BEB4"}}>
                            <FontAwesomeIcon icon={faEye} /> {view}
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
      </div>
    </div>
  );
};

export default ProfileMenuLeaning;
