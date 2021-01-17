import React from "react";
import { Container, Image } from "react-bootstrap";

const ProfileMenuMyShare = () => {
  return (
    <div className="profile-title text-uppercase">
      <div className="profile-title-bg scroll-num py-5">
        <Container className="text-center">
          <Image src="/image/image 19.png" className="about-team-circle" />
          <p className="h1 pt-4">USERNAME</p>
          <p className="h1 pt-2">E-MAIL</p>
        </Container>
      </div>
    </div>
  );
};

export default ProfileMenuMyShare;
