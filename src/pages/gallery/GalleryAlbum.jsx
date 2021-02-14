import React, {useState, useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Modal,
  Card,
  Button,
  Pagination,
} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {NavLink} from "react-router-dom";

import {useParams} from "react-router-dom";

import {
  API_GET_GALLERY_BY_ID,
  API_GET_GALLERY_PHOTO_BY_ID,
  API_DELETE_GALLERY,
  IMAGE_URL,
} from "../../apis";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

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

  const [page, setPage] = useState(1);
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
  }, []);
  useEffect(() => {
    setGalleryPhoto(null);
    API_GET_GALLERY_PHOTO_BY_ID(id, page).then((result) => {
      setGalleryPhoto(result?.data);
    });
  }, [page]);

  const handleDel = (id) => {
    Swal.fire("Are you sure!", "ต้องการลบใช่ไหม!", "info").then((result) => {
      if (result.isConfirmed) {
        API_DELETE_GALLERY(id).then(() => navigate("/gallery/"));
      }
    });
  };

  return (
    <Container className="detail">
      <div className="gallery-page text-uppercase">
        <Row>
          <Col className="text-right" xs="12" lg="12">
            <Row
              className="text-right"
              style={{
                float: "right",
              }}
            >
              {+localStorage.getItem("isAdmin") === 1 ? (
                <NavLink to={`/edit-gallery/${id}`} className="pl-2 nav-link">
                  <Button bsPrefix="btn-save" className="mb-5">
                    EDIT
                  </Button>
                </NavLink>
              ) : null}
              {+localStorage.getItem("isAdmin") === 1 ? (
                <NavLink
                  to={() => {}}
                  className="pl-2 nav-link"
                  onClick={() => handleDel(id)}
                >
                  <Button bsPrefix="btn-save btn-danger" className="mb-5">
                    DELETE
                  </Button>
                </NavLink>
              ) : null}
            </Row>
          </Col>
        </Row>
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
              <Col lg="3" className="pt-4" style={{cursor: "pointer"}}>
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
          className="d-flex justify-content-center gallery-page"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Row>
              <Col style={{placeSelf: "center"}} xs="1">
                {galleryPhotoID < 1 ? null : (
                  <FontAwesomeIcon
                    onClick={setPhotoLeftID}
                    style={{fontSize: "xxx-large", cursor: "pointer"}}
                    icon={faChevronLeft}
                  />
                )}
              </Col>
              <Col style={{textAlign: "center"}}>
                <Image
                  src={
                    galleryPhoto?.data[galleryPhotoID]?.photo
                      ? IMAGE_URL + galleryPhoto?.data[galleryPhotoID]?.photo
                      : "https://chiccarrent.com/files/images/default-placeholder.png"
                  }
                  style={{
                    maxWidth: "inherit",
                  }}
                  alt={galleryPhoto?.data[galleryPhotoID]?.title}
                />
              </Col>
              <Col style={{placeSelf: "center"}} xs="1" className="p-0">
                {galleryPhotoID >= galleryPhoto?.data.length - 1 ? null : (
                  <FontAwesomeIcon
                    onClick={setPhotoRightID}
                    style={{fontSize: "xxx-large", cursor: "pointer"}}
                    icon={faChevronRight}
                  />
                )}
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <div className="detail">
          <Pagination className="my-5" style={{float: "right"}}>
            {page > 1 && <Pagination.First onClick={() => setPage(1)} />}
            {page > 1 && <Pagination.Prev onClick={() => setPage((e) => (e -= 1))} />}
            {page > 1 && (
              <Pagination.Item onClick={() => setPage((e) => (e -= 1))}>
                {page - 1}
              </Pagination.Item>
            )}
            {<Pagination.Item active>{page}</Pagination.Item>}
            {page < galleryPhoto?.totalPage && (
              <Pagination.Item onClick={() => setPage((e) => (e += 1))}>
                {page + 1}
              </Pagination.Item>
            )}
            {page < galleryPhoto?.totalPage && (
              <Pagination.Next onClick={() => setPage((e) => (e += 1))} />
            )}
            {page < galleryPhoto?.totalPage && (
              <Pagination.Last onClick={() => setPage(galleryPhoto?.totalPage)} />
            )}
          </Pagination>
        </div>
      </div>
    </Container>
  );
};

export default GalleryAlbum;
