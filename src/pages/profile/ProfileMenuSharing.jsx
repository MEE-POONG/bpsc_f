import React, {useState, useEffect} from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";

import {API_GET_FAVORITE_SHARING, API_fAVORITE_E_lEARNING, IMAGE_URL} from "../../apis";
import {useNavigate} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart, faSearch, faHeartBroken} from "@fortawesome/free-solid-svg-icons";

const ProfileMenuSharing = () => {
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    API_GET_FAVORITE_SHARING().then((result) => {
      setFavorite(result?.data);
    });
  }, []);
  const navigate = useNavigate();

  const handleFav = (id) => {
    // API_fAVORITE_E_lEARNING(id)
    //   .then(() => {
    //     API_GET_FAVORITE_SHARING().then((result) => {
    //       setFavorite(result?.data);
    //     });
    //   })
    //   .catch();
  };
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
                  isFavorite,
                },
                idx
              ) => (
                <Col lg="3" md="4" sm="6" className="mb-5">
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
                        <span>
                          <span style={{color: "#26BEB4"}} className="mr-5">
                            <FontAwesomeIcon icon={faEye} /> {view}
                          </span>
                          <span style={{color: "#26BEB4"}}>
                            {/* <FontAwesomeIcon
                              icon={isFavorite ? faHeart : faHeartBroken}
                            /> */}
                            {isFavorite ? (
                              <i className="fa fa fa-heart"></i>
                            ) : (
                              <i
                                className="fa fa fa-heart-o"
                                onClick={() => handleFav(id)}
                              ></i>
                            )}
                            {favorite}
                          </span>
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

export default ProfileMenuSharing;
