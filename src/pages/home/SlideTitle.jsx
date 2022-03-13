import React, {Component, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Container, Card, Button, Image} from "react-bootstrap";
import { API_GET_HOMEVIDEOLINK } from "../../apis";
const SlideTitle = () => {
  const navigate = useNavigate();

  const [data, setData] = useState();


  useEffect(() => {
    API_GET_HOMEVIDEOLINK()
      .then((e) => {
        setData(e?.data?.Value);
      })
      .catch();
  }, []);


  return (
    <div style={{lineHeight: "0"}}>
      <div className="title-video">
        <iframe
          title="This is a unique title"
          src={data}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default SlideTitle;
