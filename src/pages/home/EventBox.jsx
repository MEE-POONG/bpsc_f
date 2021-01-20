import React, {Component} from "react";
import {Container, div, Card} from "react-bootstrap";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

class EventBox extends Component {
  render() {
    return (
      <div className="event text-uppercase">
        <Container>
          <div className="text-left text-uppercase">
            <Card.Title>Up coming events</Card.Title>
          </div>
          <div className="m-0 my-5 card-day">
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
                <div>
                  <Card className="bg-1">
                    <Card.Body>
                      <Card.Title>08</Card.Title>
                      <Card.Subtitle>JUNE</Card.Subtitle>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore ...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Card className="bg-2">
                    <Card.Body>
                      <Card.Title>8</Card.Title>
                      <Card.Subtitle>JUNE</Card.Subtitle>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore ...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Card className="bg-3">
                    <Card.Body>
                      <Card.Title>8</Card.Title>
                      <Card.Subtitle>JUNE</Card.Subtitle>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore ...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <Card className="bg-4">
                    <Card.Body>
                      <Card.Title>8</Card.Title>
                      <Card.Subtitle>JUNE</Card.Subtitle>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore ...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
    );
  }
}

export default EventBox;
