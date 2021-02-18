import React, {useState, useEffect} from "react";
import {
  Accordion,
  Container,
  ListGroup,
  Button,
  Card,
  Image,
  Pagination,
} from "react-bootstrap";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {API_GET_FAQ, BASE_URL, IMAGE_URL, API_GET_PHOTO_HOME} from "../../apis";
import {Slide} from "react-slideshow-image";
import HTMLFlipBook from "react-pageflip";

const GalleryPhoto = () => {
  const [photoData, setPhotoData] = useState([]);
  useEffect(() => {
    API_GET_PHOTO_HOME().then((result) => {
      setPhotoData(result?.data);
    });
  }, []);

  return (
    <>
      {photoData?.length > 0 ? (
        <HTMLFlipBook width={300} height={500}>
          {photoData?.map(({path}) => (
            <Image
              src={IMAGE_URL + path}
              style={{objectFit: "cover", width: "100%", height: "auto"}}
              alt={path}
            />
          ))}
        </HTMLFlipBook>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default GalleryPhoto;
