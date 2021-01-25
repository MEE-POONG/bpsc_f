import React, {useState} from "react";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Container, Image} from "react-bootstrap";

const ProfileTitle = () => {
  const [username] = useState(
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")
  );
  const [email] = useState(localStorage.getItem("email"));
  return (
    <div className="profile-title text-uppercase">
      <div className="profile-title-bg scroll-num py-5">
        <Container className="text-center">
          <Image src="/image/image 19.png" className="about-team-circle" />
          <p className="h1 pt-4">{username}</p>
          <p className="h1 pt-2">{email}</p>
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
