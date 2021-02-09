import React, {useState, useEffect} from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";

import {API_GET_MY_SHARING, IMAGE_URL} from "../../apis";
import {useNavigate} from "react-router-dom";

const ProfileMenuMyShare = () => {
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    API_GET_MY_SHARING().then((result) => {
      setFavorite(result?.data);
    });
  }, []);
  const navigate = useNavigate();

  return (
    <div className="profile-title-menu-my-share text-uppercase">
      <div className="profile-title-menu-my-share-bg scroll-num py-5">
        <Container className="detail">
          <Row className="py-5">
            {favorite?.data?.map(
              (
                {
                  id,
                  title,
                  view,
                  favorite,
                  sharingPicture,
                  createAt,
                  content,
                  firstName,
                  lastName,
                  userPicture,
                },
                idx
              ) => (
                <Col
                  lg="3"
                  md="4"
                  sm="6"
                  className="mb-5"
                  onClick={() => navigate("/sharing/" + id)}
                >
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
                      <Card.Text className="subtitle-text">{content}</Card.Text>
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
                          <i className="fa fa fa-heart-o"></i> {favorite}
                        </span>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProfileMenuMyShare;
