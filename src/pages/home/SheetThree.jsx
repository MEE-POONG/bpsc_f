import React, {useState, useEffect} from "react";
import {Card, Image} from "react-bootstrap";
import {faEye, faHeart, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

import {
  API_GET_SHARING,
  API_fAVORITE_SHARING,
  API_UN_fAVORITE_SHARING,
  IMAGE_URL,
} from "../../apis";
import {useNavigate} from "react-router-dom";

const SheetThree = () => {
  const navigate = useNavigate();

  const [sharing, setSharing] = useState(null);
  useEffect(() => {
    API_GET_SHARING().then((result) => {
      setSharing(result?.data);
    });
  }, []);

  const handleFav = (id) => {
    API_fAVORITE_SHARING(id)
      .then(() => {
        API_GET_SHARING().then((result) => {
          setSharing(result?.data);
        });
      })
      .catch();
  };

  const handleUnFav = (id) => {
    API_UN_fAVORITE_SHARING(id)
      .then(() => {
        API_GET_SHARING().then((result) => {
          setSharing(result?.data);
        });
      })
      .catch();
  };
  return (
    <div className="sheet-three">
      {sharing ? (
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
          {sharing?.data?.map(
            (
              {
                id,
                title,
                view,
                favorite,
                sharingPicture,
                firstName,
                lastName,
                userPicture,
                content,
                isFavorite,
              },
              idx
            ) => (
              <SwiperSlide>
                <div className="mobile-padding pl-lg-5 px-md-5 py-5">
                  <Card className="box-card-shadow">
                    <Card.Body
                      className="image"
                      onClick={() => navigate("/sharing/" + id)}
                    >
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
                      <Card.Title className="text-overflow-1">{title}</Card.Title>
                      <Card.Text className="subtitle-text">{content}</Card.Text>
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
                      <Card.Text>
                        <span className="mr-5">
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
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      ) : null}
      {/* <Swiper
        spaceBetween={50}
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
        {sharing?.data?.map(
          (
            {id, title, view, favorite, sharingPicture, firstName, lastName, userPicture},
            idx
          ) => (
            <SwiperSlide>
              <div className="mobile-padding pl-lg-5 px-md-5 py-5">
                <Card className="box-card-shadow">
                  <Card.Body className="image">
                    <Card.Img src="image/image7.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                    <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consectetur
                    </Card.Text>
                    <div className="user">
                      <span className="mr-1">
                        <Image
                          roundedCircle
                          src="image/image6.png"
                          alt=""
                          className="card-img-top"
                        />
                      </span>
                      <span className="pl-1">user</span>
                    </div>
                    <div>
                      <span className="mr-1">
                        <i className="fa fa-eye"></i> 7998
                      </span>
                      <span>
                        <i className="fa fa-comments-o"></i> 30{" "}
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper> */}

      {/* <Row className="m-0">
          <div lg="6" md="6" sm="12" xs="12" className="mobile-padding py-5">
            <Card className="box-card-shadow">
              <Card.Body className="image">
                <Card.Img src="image/image7.png" alt="" className="card-img-top" />
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก
                </Card.Title>
                <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur</Card.Text>
                <div className="user">
                  <span className="mr-1">
                    <Image
                      roundedCircle
                      src="image/image6.png"
                      alt=""
                      className="card-img-top"
                    />
                  </span>
                  <span className="pl-1">user</span>
                </div>
                <div>
                  <span className="mr-1">
                    <i className="fa fa-eye"></i> 7998
                  </span>
                  <span>
                    <i className="fa fa-comments-o"></i> 30{" "}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div lg="6" md="6" sm="12" xs="12" className="mobile-padding py-5">
            <Card className="box-card-shadow">
              <Card.Body className="image">
                <Card.Img src="image/image8.png" alt="" className="card-img-top" />
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก
                </Card.Title>
                <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur
                </Card.Text>
                <div className="user">
                  <span className="mr-1">
                    <Image
                      roundedCircle
                      src="image/image9.png"
                      alt=""
                      className="card-img-top"
                    />
                  </span>
                  <span className="pl-1">user</span>
                </div>
                <div>
                  <span className="mr-1">
                    <i className="fa fa-eye"></i> 7998
                  </span>
                  <span>
                    <i className="fa fa-comments-o"></i> 30{" "}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Row> */}
    </div>
  );
};
export default SheetThree;
