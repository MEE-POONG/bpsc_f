import React, {Component} from "react";
import {Card, Image} from "react-bootstrap";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

class SheetTwo extends Component {
  render() {
    return (
      <div className="sheet-three">
        <Swiper
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
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="mobile-padding py-5">
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img src="image/image7.png" alt="" className="card-img-top" />
                </Card.Body>
                <Card.Body>
                  <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
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
          <SwiperSlide>
            <div className="mobile-padding py-5">
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img src="image/image8.png" alt="" className="card-img-top" />
                </Card.Body>
                <Card.Body>
                  <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="mobile-padding py-5">
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img src="image/image8.png" alt="" className="card-img-top" />
                </Card.Body>
                <Card.Body>
                  <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="mobile-padding py-5">
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img src="image/image8.png" alt="" className="card-img-top" />
                </Card.Body>
                <Card.Body>
                  <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="mobile-padding py-5">
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img src="image/image8.png" alt="" className="card-img-top" />
                </Card.Body>
                <Card.Body>
                  <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="mobile-padding py-5">
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img src="image/image8.png" alt="" className="card-img-top" />
                </Card.Body>
                <Card.Body>
                  <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="mobile-padding py-5">
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img src="image/image8.png" alt="" className="card-img-top" />
                </Card.Body>
                <Card.Body>
                  <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="mobile-padding py-5">
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img src="image/image8.png" alt="" className="card-img-top" />
                </Card.Body>
                <Card.Body>
                  <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="mobile-padding py-5">
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img src="image/image8.png" alt="" className="card-img-top" />
                </Card.Body>
                <Card.Body>
                  <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="mobile-padding py-5">
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img src="image/image8.png" alt="" className="card-img-top" />
                </Card.Body>
                <Card.Body>
                  <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="mobile-padding py-5">
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img src="image/image8.png" alt="" className="card-img-top" />
                </Card.Body>
                <Card.Body>
                  <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="mobile-padding py-5">
              <Card className="box-card-shadow">
                <Card.Body className="image">
                  <Card.Img src="image/image8.png" alt="" className="card-img-top" />
                </Card.Body>
                <Card.Body>
                  <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                  <Card.Subtitle>Lorem ipsum dolor sit amet</Card.Subtitle>
                  <Card.Text className="subtitle-text">
                    Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                    consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                    amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum
                    dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                    ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur
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
          </SwiperSlide>
        </Swiper>

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
  }
}
export default SheetTwo;
