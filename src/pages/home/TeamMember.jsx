import React, {Component} from "react";
import {Container, Card, Button} from "react-bootstrap";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

class TeamMember extends Component {
  render() {
    return (
      <div className="team">
        <Container fluid className="py-5">
          <Card className="text-center ">
            <Card.Body className="text-uppercase">
              <Card.Subtitle className="text-uppercase">
                our team members
              </Card.Subtitle>
              <Card.Title className="">
                we have quality complete expert
              </Card.Title>
              <Card.Title className="team-subtitle">reviews in our program</Card.Title>
              <Card.Text className="team-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore ...
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Container fluid>
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
              <div className="profile-card-2">
                <img className="img img-responsive" src="/image/image24.png" alt="" />
                <div className="profile-name">DR.YONG PAL</div>
                <div className="profile-username">CARDIOTHORACIC SURGEON</div>
                <div className="profile-tel">TEL +666 666 6666</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profile-card-2">
                <img className="img img-responsive" src="/image/image23.png" alt="" />
                <div className="profile-name">DR.YONG PAL</div>
                <div className="profile-username">CARDIOTHORACIC SURGEON</div>
                <div className="profile-tel">TEL +666 666 6666</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profile-card-2">
                <img className="img img-responsive" src="/image/image26.png" alt="" />
                <div className="profile-name">DR.YONG PAL</div>
                <div className="profile-username">CARDIOTHORACIC SURGEON</div>
                <div className="profile-tel">TEL +666 666 6666</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="profile-card-2">
                <img className="img img-responsive" src="/image/image24.png" alt="" />
                <div className="profile-name">DR.YONG PAL</div>
                <div className="profile-username">CARDIOTHORACIC SURGEON</div>
                <div className="profile-tel">TEL +666 666 6666</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profile-card-2">
                <img className="img img-responsive" src="/image/image23.png" alt="" />
                <div className="profile-name">DR.YONG PAL</div>
                <div className="profile-username">CARDIOTHORACIC SURGEON</div>
                <div className="profile-tel">TEL +666 666 6666</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="profile-card-2">
                <img className="img img-responsive" src="/image/image26.png" alt="" />
                <div className="profile-name">DR.YONG PAL</div>
                <div className="profile-username">CARDIOTHORACIC SURGEON</div>
                <div className="profile-tel">TEL +666 666 6666</div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="text-center my-5">
            <Button>MODE ABOUT US BPSC</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default TeamMember;
