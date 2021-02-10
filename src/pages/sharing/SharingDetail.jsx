import React, {useState, useEffect} from "react";
import {
  Container,
  Card,
  InputGroup,
  FormControl,
  Row,
  Col,
  Image,
  Pagination,
} from "react-bootstrap";
import {faEye, faHeart, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {API_GET_SHARING, API_fAVORITE_SHARING, IMAGE_URL} from "../../apis";
import {useNavigate} from "react-router-dom";

const SharingDetail = () => {
  const [sharing, setSharing] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    API_GET_SHARING(search, page).then((result) => {
      setSharing(result?.data);
    });
  }, [search, page]);

  const handleFav = (id) => {
    API_fAVORITE_SHARING(id)
      .then(() => {
        API_GET_SHARING(search, page).then((result) => {
          setSharing(result?.data);
        });
      })
      .catch();
  };

  return (
    <>
      <Container className="title mb-5">
        <Row>
          <Col lg="8">
            <Card.Title>Hope Sharing</Card.Title>
            <Card.Subtitle>แบ่งปันประสบการณ์</Card.Subtitle>
          </Col>
          <Col lg="4" className="align-self-center">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text variant="outline-secondary" id="basic-addon1">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Search..."
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <Container className="detail">
        <Row>
          <Col xs="12" lg="12">
            <Card.Subtitle className="scroll">
              {sharing?.totalRecord} Sharing
            </Card.Subtitle>
          </Col>
        </Row>
        <Row className="py-5">
          {sharing?.data?.map(
            ({
              id,
              title,
              view,
              favorite,
              sharingPicture,
              firstName,
              lastName,
              userPicture,
              content,
              isFavorite,
            }) => (
              <Col lg="3" md="4" sm="6" className="mb-5" key={id}>
                {/* <NavLink to={"/sharing/" + id}> */}
                <Card className="box-card-shadow">
                  <Card.Body className="image" onClick={() => navigate("/sharing/" + id)}>
                    <Card.Img
                      style={{height: "200px"}}
                      src={
                        sharingPicture
                          ? IMAGE_URL + sharingPicture
                          : "https://chiccarrent.com/files/images/default-placeholder.png"
                      }
                      alt={title}
                      className="card-img-top"
                    />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="subtitle-text">{content}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className="user">
                      <span className="mr-1">
                        <Image
                          roundedCircle
                          src={
                            userPicture
                              ? IMAGE_URL + userPicture
                              : "https://chiccarrent.com/files/images/default-placeholder.png"
                          }
                          alt={title}
                          className="card-img-top"
                        />
                      </span>
                      <span className="pl-1">
                        {firstName} {lastName}
                      </span>
                    </div>
                    <Card.Text className="mr-auto ">
                      <span>
                        <span style={{color: "#26BEB4"}} className="mr-5">
                          <FontAwesomeIcon className="pr-2" icon={faEye} /> {view}
                        </span>
                        <span style={{color: "#26BEB4"}}>
                          {/* <FontAwesomeIcon
                              icon={isFavorite ? faHeart : faHeartBroken}
                            /> */}
                          {isFavorite ? (
                            <i className="fa fa fa-heart pr-2"></i>
                          ) : (
                            <i
                              className="fa fa fa-heart-o pr-2"
                              onClick={() => handleFav(id)}
                            ></i>
                          )}
                          {favorite}
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Footer>
                </Card>
                {/* </NavLink> */}
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
            {page < sharing?.totalPage && (
              <Pagination.Item onClick={() => setPage((e) => (e += 1))}>
                {page + 1}
              </Pagination.Item>
            )}
            {page < sharing?.totalPage && (
              <Pagination.Next onClick={() => setPage((e) => (e += 1))} />
            )}
            {page < sharing?.totalPage && (
              <Pagination.Last onClick={() => setPage(sharing?.totalPage)} />
            )}
          </Pagination>
        </div>
      </Container>
    </>
  );
};

export default SharingDetail;
