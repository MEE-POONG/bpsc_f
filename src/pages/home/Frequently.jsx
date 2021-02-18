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
import {Zoom} from "react-slideshow-image";

const Frequently = () => {
  const [faqData, setFaqData] = useState(null);
  const [photoData, setPhotoData] = useState([]);

  const [activeId, setActiveId] = useState("0");
  const [page, setPage] = useState(1);

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  useEffect(() => {
    API_GET_PHOTO_HOME().then((result) => {
      console.log(result?.data);
      setPhotoData(result?.data);
    });
  }, []);

  useEffect(() => {
    API_GET_FAQ(page).then((result) => {
      setFaqData(result?.data);
    });
  }, [page]);

  return (
    <div className="home-faq text-uppercase">
      <Container fluid className="m-0 p-0">
        <ListGroup horizontal>
          <ListGroup.Item
            className="start hide-short-desc"
            style={{width: "50%", position: "relative"}}
          >
            {photoData?.length > 0 ? (
              <Zoom scale={0.4} autoplay={true}>
                {photoData?.map(({path}) => (
                  <Image
                    src={IMAGE_URL + path}
                    style={{objectFit: "cover", width: "100%", maxHeight: "700px"}}
                    alt={path}
                  />
                ))}
              </Zoom>
            ) : null}
          </ListGroup.Item>
          <ListGroup.Item
            className="end col-lg-6 col-md-6 col-sm-12"
            style={{position: "relative"}}
          >
            <Card.Title className="f-gradient">FAQ</Card.Title>
            <Accordion defaultActiveKey="0">
              {faqData?.data.map((e, idx) => (
                <Card>
                  <Card.Header className="d-flex">
                    <Card.Title bsPrefix="title">{e?.question}</Card.Title>
                    <Accordion.Toggle
                      bsPrefix="btn-faq"
                      as={Button}
                      variant="link"
                      eventKey={idx.toString()}
                      onClick={() => toggleActive(idx.toString())}
                    >
                      <FontAwesomeIcon
                        className=""
                        icon={activeId === idx.toString() ? faMinus : faPlus}
                      />
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={idx.toString()}>
                    <Card.Body>{e?.answer}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </ListGroup.Item>
        </ListGroup>
        <div className="faq">
          {faqData?.totalPage > 1 ? (
            <Pagination>
              {page > 1 && <Pagination.First onClick={() => setPage(1)} />}
              {page > 1 && <Pagination.Prev onClick={() => setPage((e) => (e -= 1))} />}
              {page > 1 && (
                <Pagination.Item onClick={() => setPage((e) => (e -= 1))}>
                  {page - 1}
                </Pagination.Item>
              )}
              {<Pagination.Item active>{page}</Pagination.Item>}
              {page < faqData?.totalPage && (
                <Pagination.Item onClick={() => setPage((e) => (e += 1))}>
                  {page + 1}
                </Pagination.Item>
              )}
              {page < faqData?.totalPage && (
                <Pagination.Next onClick={() => setPage((e) => (e += 1))} />
              )}
              {page < faqData?.totalPage && (
                <Pagination.Last onClick={() => setPage(faqData?.totalPage)} />
              )}
            </Pagination>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default Frequently;
