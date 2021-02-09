import moment from "moment";
import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

import { API_GET_EVENT } from "../../apis";

const EventBox = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    API_GET_EVENT().then((result) => {
      setEvent(result?.data);
    });
  }, []);

  return (
    <div className="event text-uppercase">
      <Container>
        <div className="text-left text-uppercase">
          <Card.Title>Up coming events</Card.Title>
        </div>
        <div className="m-0 my-5 card-day">
          {event ? (
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
              {event?.data?.map(
                ({ id, title, content, location, time, eventStart, eventEnd }, idx) => (
                  <SwiperSlide>
                    <div>
                      <Card className={`bg-${idx > 3 ? 4 : idx + 1} height-293`}>
                        <Card.Body>
                          <Card.Title>{moment(eventStart).format("DD")}</Card.Title>
                          <Card.Subtitle>
                            {moment(eventStart).format("MMM")}
                          </Card.Subtitle>
                          <Card.Text className="text-overflow-5">
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle>{content}</Card.Subtitle>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default EventBox;
