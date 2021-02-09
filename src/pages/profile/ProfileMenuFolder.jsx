import React, {useState, useEffect} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

import {API_GET_DRAFT_SHARING, IMAGE_URL} from "../../apis";
import {useNavigate} from "react-router-dom";
import moment from "moment";
const ProfileMenuFolder = () => {
  const [draft, setDraft] = useState(null);

  useEffect(() => {
    API_GET_DRAFT_SHARING().then((result) => {
      setDraft(result?.data);
    });
  }, []);
  const navigate = useNavigate();

  return (
    <div className="profile-title-menu-my-share text-uppercase">
      <div className="profile-title-menu-my-share-bg scroll-num py-5">
        <Container>
          <Row className="py-5">
            {draft?.data?.map(
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
                <Card className="box-card-shadow border-radius-25 mb-5">
                  <Card.Body className="image">
                    <Row>
                      <Col lg="4">
                        <Card.Img
                          src={
                            sharingPicture
                              ? IMAGE_URL + sharingPicture
                              : "https://chiccarrent.com/files/images/default-placeholder.png"
                          }
                          alt={title}
                          className="card-img-top"
                        />
                      </Col>
                      <Col lg="8">
                        <div className="float-right h4 pt-2">
                          {moment(createAt).fromNow()}
                        </div>
                        <Card.Title className="pt-5 font-weight-bold">{title}</Card.Title>
                        <Card.Text className="subtitle-text">{content}</Card.Text>
                        <div className="pt-5 about-talk-with-us-btn-right">
                          <button
                            type="button"
                            className="btn btn-danger about-talk-with-us-btn-danger "
                          >
                            Danger
                          </button>
                          <button
                            type="button"
                            className="btn btn-success about-talk-with-us-btn-success"
                          >
                            Success
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              )
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProfileMenuFolder;
