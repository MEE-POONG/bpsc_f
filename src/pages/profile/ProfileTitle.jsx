import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Button, Container, Image} from "react-bootstrap";

const ProfileTitle = () => {
  return (
    <div className="profile-title text-uppercase">
      <div className="profile-title-bg scroll-num py-5">
        <Container className="text-center">
          <Image src="/image/image 19.png" className="about-team-circle" />
          <p className="h1 pt-4">USERNAME</p>
          <p className="h1 pt-2">E-MAIL</p>
          <div className="pt-2">
            <Button variant="light" className="text-dark">
              EDIT <FontAwesomeIcon icon={faEdit} />
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProfileTitle;
