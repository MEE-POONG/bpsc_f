import React, {useState, useEffect} from "react";
import {Container, Row, Col, Pagination, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {API_GET_GALLERY, IMAGE_URL} from "../../apis";
import {useNavigate} from "react-router-dom";

const GalleryCard = () => {
  const [gallery, setGallery] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    API_GET_GALLERY(page).then((result) => {
      setGallery(result?.data);
    });
  }, [page]);

  return (
    <Container className="detail">
      <Row className="py-5">
        {gallery?.data?.map(
          ({
            id,
            title,
            view,
            favorite,
            galleryPicture,
            firstName,
            lastName,
            userPicture,
            content,
          }) => (
            <Col lg="3" md="4" sm="6" className="mb-5">
              <NavLink to="/gallery/12" className="nav-link">
                <Card className="box-card-shadow">
                  <Card.Body className="image">
                    <Card.Img src="/image/image7.png" alt="" className="card-img-top" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>HOW TO BA คนไข้ที่มีพฤติกรรมดื่มสุราหนัก</Card.Title>
                    <Card.Text className="subtitle-text">
                      Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consecteturLorem ipsum dolor sit amet consecteturLorem
                      ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                      consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor
                      sit amet consectetur
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Text className="mr-auto">
                      <span style={{color: "#26BEB4"}}>READ MORE</span>
                      <span style={{color: "#26BEB4"}}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </NavLink>
            </Col>
          )
        )}
      </Row>

      <div>
        <Pagination className="my-5" style={{float: "right"}}>
          {page > 1 && <Pagination.First onClick={() => setPage(1)} />}
          {page > 1 && <Pagination.Prev onClick={() => setPage((e) => (e -= 1))} />}
          {page > 1 && (
            <Pagination.Item onClick={() => setPage((e) => (e -= 1))}>
              {page - 1}
            </Pagination.Item>
          )}
          {<Pagination.Item active>{page}</Pagination.Item>}
          {page < gallery?.totalPage && (
            <Pagination.Item onClick={() => setPage((e) => (e += 1))}>
              {page + 1}
            </Pagination.Item>
          )}
          {page < gallery?.totalPage && (
            <Pagination.Next onClick={() => setPage((e) => (e += 1))} />
          )}
          {page < gallery?.totalPage && (
            <Pagination.Last onClick={() => setPage(gallery?.totalPage)} />
          )}
        </Pagination>
      </div>
    </Container>
  );
};

export default GalleryCard;
