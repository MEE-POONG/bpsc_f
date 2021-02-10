import React, {useState, useEffect} from "react";
import {Card, Media} from "react-bootstrap";
import {faEye, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

import {API_GET_LEARNING, API_fAVORITE_E_lEARNING, IMAGE_URL} from "../../apis";
import moment from "moment";
import {useNavigate} from "react-router-dom";

const Abstain = () => {
  const navigate = useNavigate();

  const [learning, setLearning] = useState(null);
  useEffect(() => {
    API_GET_LEARNING().then((result) => {
      setLearning(result?.data);
    });
  }, []);

  const handleFav = (id) => {
    API_fAVORITE_E_lEARNING(id)
      .then(() => {
        API_GET_LEARNING().then((result) => {
          setLearning(result?.data);
        });
      })
      .catch();
  };

  return (
    <div className="learning text-uppercase text-left">
      <div>
        {learning ? (
          <Swiper
            spaceBetween={50}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
          >
            {learning.data?.map(
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
                  isFavorite,
                },
                idx
              ) => (
                <SwiperSlide>
                  <div className="mobile-padding py-5">
                    <Card>
                      <Card.Body
                        className="image"
                        onClick={() => navigate(`/e-leaning/${id}`)}
                      >
                        <img
                          src={
                            elearningPicture
                              ? IMAGE_URL + elearningPicture
                              : "https://chiccarrent.com/files/images/default-placeholder.png"
                          }
                          style={{height: "359px", objectFit: "cover"}}
                          alt={title}
                          className="card-img-top"
                        />
                      </Card.Body>
                      <Card.Body onClick={() => navigate(`/e-leaning/${id}`)}>
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
                        {content}
                      </Card.Body>
                      <Card.Footer>
                        <Card.Text className="mr-auto mt-4">
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
                        </Card.Text>
                      </Card.Footer>
                    </Card>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default Abstain;
