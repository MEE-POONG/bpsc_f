import React, {useState, useEffect} from "react";
import {Card, Media} from "react-bootstrap";
import {faEye, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

import {
  API_GET_ELEARNING_FAV_ORDER,
  API_fAVORITE_E_lEARNING,
  API_UN_fAVORITE_E_lEARNING,
  IMAGE_URL,
} from "../../apis";
import moment from "moment";
import {useNavigate} from "react-router-dom";

const Abstain = () => {
  const navigate = useNavigate();

  const [learning, setLearning] = useState(null);
  useEffect(() => {
    API_GET_ELEARNING_FAV_ORDER().then((result) => {
      setLearning(result?.data);
    });
  }, []);

  const handleFav = (id) => {
    API_fAVORITE_E_lEARNING(id)
      .then(() => {
        API_GET_ELEARNING_FAV_ORDER().then((result) => {
          setLearning(result?.data);
        });
      })
      .catch();
  };

  const handleUnFav = (id) => {
    API_UN_fAVORITE_E_lEARNING(id)
      .then(() => {
        API_GET_ELEARNING_FAV_ORDER().then((result) => {
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
            autoplay={1000}
            slidesPerView={"auto"}
            spaceBetween={50}
            loop={true}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
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
                    <Card onClick={() => navigate(`/e-leaning/${id}`)}>
                      <Card.Img
                        src={
                          elearningPicture
                            ? IMAGE_URL + elearningPicture
                            : "https://chiccarrent.com/files/images/default-placeholder.png"
                        }
                        alt={title}
                      />
                      <Card.Body onClick={() => navigate(`/e-leaning/${id}`)}>
                        <Card.Title>
                          <Media>
                            <Card bsPrefix="date" className="absolute">
                              <Card.Title>{moment(createAt).format("DD")}</Card.Title>
                              <Card.Subtitle>
                                {moment(createAt).format("MMM")}
                              </Card.Subtitle>
                            </Card>
                            <Card className="date">
                              <Card.Title>xx</Card.Title>
                              <Card.Subtitle></Card.Subtitle>
                            </Card>
                            <Media.Body>
                              <p>
                                <b className="text-overflow-1" style={{color: "#000"}}>
                                  {title}
                                </b>
                              </p>
                            </Media.Body>
                          </Media>
                        </Card.Title>
                        <Card.Subtitle className="text-overflow-4">
                          {content}
                        </Card.Subtitle>
                      </Card.Body>
                      <Card.Footer>
                        <Card.Text className="mr-auto mt-4">
                          <span>
                            <span style={{color: "#26BEB4"}} className="mr-3">
                              <FontAwesomeIcon className="pr-2" icon={faEye} /> {view}
                            </span>
                            <span style={{color: "#26BEB4"}}>
                              {isFavorite ? (
                                <i
                                  className="fa fa fa-heart pr-2"
                                  onClick={() => handleUnFav(id)}
                                ></i>
                              ) : (
                                <i
                                  className="fa fa fa-heart-o pr-2"
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
