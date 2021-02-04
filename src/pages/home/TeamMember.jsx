import React, {useState, useEffect} from "react";
import {Container, Card, Button} from "react-bootstrap";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import {API_GET_DOCTOR, IMAGE_URL} from "../../apis";

const TeamMember = () => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    API_GET_DOCTOR().then((result) => {
      setDoctor(result?.data);
    });
  }, []);

  return (
    <div className="team">
      <Container fluid className="py-5">
        <Card className="text-center ">
          <Card.Body className="text-uppercase">
            <Card.Subtitle className="text-uppercase">our team members</Card.Subtitle>
            <Card.Title className="">we have quality complete expert</Card.Title>
            <Card.Title className="team-subtitle">reviews in our program</Card.Title>
            <Card.Text className="team-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore ...
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container fluid>
        {doctor ? (
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
            {doctor?.data?.map(
              ({id, firstName, lastName, email, phone, picture, content}, idx) => (
                <SwiperSlide key={idx}>
                  <div className="profile-card-2">
                    <img
                      className="img img-responsive"
                      src={
                        picture
                          ? IMAGE_URL + picture
                          : "https://chiccarrent.com/files/images/default-placeholder.png"
                      }
                      alt={id}
                    />
                    <div className="profile-name">
                      DR.{firstName}
                      {/* {lastName} */}
                    </div>
                    <div className="profile-username">{email}</div>
                    <div className="profile-tel">TEL {phone || "-"}</div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        ) : null}
        <div className="text-center my-5">
          <Button>MODE ABOUT US BPSC</Button>
        </div>
      </Container>
    </div>
  );
};

export default TeamMember;
