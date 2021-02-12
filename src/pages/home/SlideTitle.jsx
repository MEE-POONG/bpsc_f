import React, {Component} from "react";
import {useNavigate} from "react-router-dom";
import {Container, Card, Button, Image} from "react-bootstrap";
const SlideTitle = () => {
  const navigate = useNavigate();
  return (
    <div style={{lineHeight: "0"}}>
      <div className="title-video">
        <iframe
          title="This is a unique title"
          src="https://www.youtube-nocookie.com/embed/gJBQWXcTg2U"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default SlideTitle;
