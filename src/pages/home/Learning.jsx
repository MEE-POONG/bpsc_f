import React, { Component } from "react";
import { Card, Media } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

class Abstain extends Component {
  render() {
    return (
      <div className="learning text-uppercase text-left">
        <div>
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
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image12.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image11.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image10.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image12.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>oct</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image12.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image11.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image10.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image12.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>oct</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image12.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image11.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image10.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image12.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>oct</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image12.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image11.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image10.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image12.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>oct</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image12.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image11.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image10.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image12.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>oct</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image12.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image11.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image10.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>OCT</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-padding py-5">
                <Card>
                  <Card.Body className="image">
                    <img src="image/image12.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>
                      <Media>
                        <Card className="date absolute">
                          <Card.Title>15</Card.Title>
                          <Card.Subtitle>oct</Card.Subtitle>
                        </Card>
                        <Card className="date">
                          <Card.Title></Card.Title>
                          <Card.Subtitle></Card.Subtitle>
                        </Card>
                        <Media.Body>
                          <p>
                            <b style={{ color: "#000" }}>
                              what you need to know about BPSC?
                            </b>
                          </p>
                        </Media.Body>
                      </Media>
                    </Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span className="d-flex justify-content-between">
                        <span style={{ color: "#26BEB4" }}>
                          READ MORE
                          <i style={{ fontSize: "14px" }} className="fa pl-2">
                            &#xf061;
                          </i>
                        </span>
                        <span>
                          <i className="fa fa-heart-o"></i> 112
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Abstain;
