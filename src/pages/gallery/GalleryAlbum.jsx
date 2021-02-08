import React, {useState, useEffect} from "react";
import {Container, Row, Col, Image, Modal, Card, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import {useParams} from "react-router-dom";

import {API_GET_GALLERY_BY_ID, API_GET_GALLERY_PHOTO_BY_ID, IMAGE_URL} from "../../apis";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const GalleryAlbum = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const {id} = useParams();
  const [gallery, setGallery] = useState(null);
  const [galleryPhoto, setGalleryPhoto] = useState(null);
  const [galleryPhotoID, setGalleryPhotoID] = useState(null);
  const setPhotoID = (idx) => setGalleryPhotoID(idx);
  const setPhotoLeftID = () => setGalleryPhotoID((e) => (e -= 1));
  const setPhotoRightID = () => setGalleryPhotoID((e) => (e += 1));
  useEffect(() => {
    API_GET_GALLERY_BY_ID(id).then((result) => {
      setGallery(result?.data);
    });
    API_GET_GALLERY_PHOTO_BY_ID(id).then((result) => {
      setGalleryPhoto(result?.data);
    });
  }, []);

  return (
    <div className="gallery-page text-uppercase">
      <Container className="title-album ">
        <Card.Body className="text-center">
          <Card.Title>{gallery?.gallery?.title}</Card.Title>
          <Card.Text className="team-subtitle">{gallery?.gallery?.content}</Card.Text>
          <div className="btn-back mt-5" onClick={() => navigate("/gallery")}>
            BAck to Gallery
          </div>
        </Card.Body>
        <Row>
          {galleryPhoto?.data?.map(({id, title, description, photo}, idx) => (
            <Col lg="3" className="pt-4">
              <Image
                src={
                  photo
                    ? IMAGE_URL + photo
                    : "https://chiccarrent.com/files/images/default-placeholder.png"
                }
                alt={title}
                onClick={() => {
                  handleShow();
                  setPhotoID(idx);
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="d-flex justify-content-center"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col style={{placeSelf: "center"}}>
              {galleryPhotoID < 1 ? null : (
                <FontAwesomeIcon
                  onClick={setPhotoLeftID}
                  style={{fontSize: "xxx-large"}}
                  icon={faChevronLeft}
                />
              )}
            </Col>
            <Col>
              <Image
                src={
                  galleryPhoto?.data[galleryPhotoID]?.photo
                    ? IMAGE_URL + galleryPhoto?.data[galleryPhotoID]?.photo
                    : "https://chiccarrent.com/files/images/default-placeholder.png"
                }
                alt={galleryPhoto?.data[galleryPhotoID]?.title}
              />
            </Col>
            <Col style={{placeSelf: "center"}}>
              {galleryPhotoID >= galleryPhoto?.data.length - 1 ? null : (
                <FontAwesomeIcon
                  onClick={setPhotoRightID}
                  style={{fontSize: "xxx-large"}}
                  icon={faChevronRight}
                />
              )}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GalleryAlbum;
