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
  Button,
} from "react-bootstrap";
import {faEye, faHeart, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  API_GET_SHARING,
  API_fAVORITE_SHARING,
  API_UN_fAVORITE_SHARING,
  API_DELETE_SHARING,
  IMAGE_URL,
  API_GET_RANDOMSHARINGTAG,
} from "../../apis";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";

const SharingDetail = () => {
  const {type} = useParams();

  const [sharingRandomTag, setSharingRandomTag] = useState("");
  const [sharingRandom, setSharingRandom] = useState(null);
  const [sharing, setSharing] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    API_GET_SHARING(
      search,
      page,
      "",
      sharingRandomTag || undefined,
      type || undefined
    ).then((result) => {
      setSharing(result?.data);
    });
  }, [search, page, type, sharingRandomTag]);

  useEffect(() => {
    API_GET_RANDOMSHARINGTAG().then((result) => {
      setSharingRandom(result?.data);
    });
  }, []);

  const handleFav = (id) => {
    API_fAVORITE_SHARING(id)
      .then(() => {
        API_GET_SHARING(
          search,
          page,
          "",
          sharingRandomTag || undefined,
          type || undefined
        ).then((result) => {
          setSharing(result?.data);
        });
      })
      .catch();
  };

  const handleUnFav = (id) => {
    API_UN_fAVORITE_SHARING(id)
      .then(() => {
        API_GET_SHARING(
          search,
          page,
          "",
          sharingRandomTag || undefined,
          type || undefined
        ).then((result) => {
          setSharing(result?.data);
        });
      })
      .catch();
  };

  const handleDel = (id) => {
    API_DELETE_SHARING(id)
      .then(() => {
        API_GET_SHARING(
          search,
          page,
          "",
          sharingRandomTag || undefined,
          type || undefined
        ).then((result) => {
          setSharing(result?.data);
        });
      })
      .catch(() => {
        API_GET_SHARING(
          search,
          page,
          "",
          sharingRandomTag || undefined,
          type || undefined
        ).then((result) => {
          setSharing(result?.data);
        });
      });
  };

  return (
    <>
      <Container className="title mb-5">
        <Row>
          <Col lg="8">
            <Card.Title>Hope Sharing</Card.Title>
            <Card.Subtitle>
              แบ่งปันประสบการณ์
              {type === "1" ? " คำแนะนำแบบสั้น" : ""}
              {type === "2" ? " ประเมินแบบสั้น" : ""}
              {type === "3" ? " ฝึกสติแบบสั้น" : ""}
              {type === "4" ? " สติบําบัด" : ""}
            </Card.Subtitle>
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

      <Container className="detail pb-5">
        {sharingRandom?.tags?.map(({id, title}) => (
          <Button
            variant="outline-primary"
            className="text-custom-tag outline-primary"
            onClick={() => setSharingRandomTag(id)}
          >
            {title}
          </Button>
        ))}
        <Button
          variant="outline-primary"
          className="text-custom-tag outline-primary"
          onClick={() => setSharingRandomTag("")}
        >
          CLEAR
        </Button>
      </Container>

      <Container className="detail">
        <Row>
          <Col xs="12" lg="12">
            <Card.Subtitle className="scroll">
              {sharing?.totalRecord} Sharing
              {sharingRandomTag
                ? " by tag " +
                  sharingRandom?.tags.find(({id}) => id === sharingRandomTag)?.title
                : ""}
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
              userId,
            }) => (
              <Col lg="3" md="4" sm="6" className="mb-5" key={id}>
                {/* <NavLink to={"/sharing/" + id}> */}
                <Card className="box-card-shadow">
                  {/* {+localStorage.getItem("id") === userId ||
                  +localStorage.getItem("isAdmin") === 1 ? (
                    <div className="btn-cancel-card" onClick={() => handleDel(id)}>
                      <i class="fa fa-times-circle"></i>
                    </div>
                  ) : null} */}
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
                  <Card.Body onClick={() => navigate("/sharing/" + id)}>
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
                        <span style={{color: "#26BEB4"}} className="mr-3">
                          <FontAwesomeIcon className="pr-2" icon={faEye} /> {view}
                        </span>
                        <span style={{color: "#26BEB4"}}>
                          {isFavorite ? (
                            <i
                              className="fa fa fa-heart pr-2"
                              onClick={() => handleUnFav(id)}
                            ></i>
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
          {sharing?.totalPage > 1 ? (
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
          ) : null}
        </div>
      </Container>
    </>
  );
};

export default SharingDetail;
