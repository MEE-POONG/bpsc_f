import React, {useState, useEffect} from "react";
import {
  Container,
  InputGroup,
  Row,
  Col,
  Media,
  Image,
  Button,
  FormControl,
  Table
} from "react-bootstrap";
import {
  faArrowRight,
  faChevronDown,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useParams} from "react-router-dom";

import {API_GET_ELEARNING_BY_ID, API_GET_LEARNING_COMMENT, IMAGE_URL} from "../../apis";
import moment from "moment";
import {NavLink} from "react-router-dom";

const LeaningList = () => {
  const {id} = useParams();
  const [elearning, setElearning] = useState(null);
  const [comment, setComment] = useState(null);
  useEffect(() => {
    API_GET_ELEARNING_BY_ID(id).then((result) => {
      setElearning(result?.data);
    });
    API_GET_LEARNING_COMMENT(id).then((result) => {
      setComment(result?.data);
    });
  }, []);
  return (
    <Container className="leaning-list">
      <Row>
        <Col className="text-right" xs="12" lg="12">
          <NavLink to={"/sharing/"} className="p-0 nav-link">
            <Button bsPrefix="btn-save" className="mb-5">
              BACK
            </Button>
          </NavLink>
        </Col>
        <Col className="text-center mb-5" xs="12" lg="12">
          <iframe
            title="This is a unique title"
            src={elearning?.elearning?.videoLink}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Col>
        <Col xs="12" lg="12">
          <h1>{elearning?.elearning?.title}</h1>
          <h3>{elearning?.elearning?.content}</h3>
          <h3 className="contact">
            <span className="mr-5">
              {moment(elearning?.elearning?.createAt).format("LL")}
            </span>
            <span className="mr-2">
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span className="mr-5">{elearning?.elearning?.favorite}</span>
            <span className="mr-2">
              <FontAwesomeIcon icon={faEye} />
            </span>
            <span className="mr-2">{elearning?.elearning?.view}</span>
          </h3>
        </Col>
        <Col xs="12" lg="12" className="mt-5">
          <span className="tag">แท็คที่เกี่ยวข้อง</span>
        </Col>
        <Col xs="12" lg="12" className="mt-5 tag-list">
          <div className="tag mr-5">
            {elearning?.tags?.map(({tag}) => (
              <p>{tag}</p>
            ))}
          </div>
        </Col>
        <Col xs="12" lg="12" className="mt-5 comment align-items-center">
          <Media>
            <img
              width={64}
              height={64}
              className="align-self-start mr-3"
              src="../image/image12.png"
              alt="Generic placeholder"
            />
            <Media.Body>
              <FormControl
                bsPrefix="input-comment"
                as="textarea"
                placeholder="Add a Public Comment..."
              />
            </Media.Body>
          </Media>
        </Col>
      </Row>{" "}
      <Container fluid className="list mb-5 py-5">
        {comment?.data?.map(
          ({userPicture, comment, createAt, id, firstName, lastName}, idx) => (
            <Media>
              <Image
                src={
                  userPicture
                    ? IMAGE_URL + userPicture
                    : "https://chiccarrent.com/files/images/default-placeholder.png"
                }
                alt={comment}
              />
              <Media.Body className="detail">
                <p className="date">{moment(createAt).format("LL")}</p>
                <p className="text">{comment}</p>
              </Media.Body>
            </Media>
          )
        )}
        {comment?.totalPage > 1 ? (
          <Button bsPrefix="btn-show-list" onClick={() => {}}>
            <FontAwesomeIcon icon={faChevronDown} />
          </Button>
        ) : null}
      </Container>
      <Container className="sheet p-lg-5 p-md-5 mb-5">
        <Table responsive="sm">
          <tr style={{background: "#26beb4"}}>
            <th className="head-th text-left">เอกสารที่เกี่ยวข้อง</th>
            <th className="head-th ">Size</th>
            <th className="head-th">Download</th>
          </tr>
          <tbody className="file">
            <tr>
              <td className="text-start">
                <Media>
                  <Image src="../image/pdf.png" />
                  <Media.Body>Lorem ipsum dolor sit amet, consectetur</Media.Body>
                </Media>
              </td>
              <td className="text-center">404.80 kb</td>
              <td className="text-center">
                <Button bsPrefix="download mb3">Download</Button>
                <Button bsPrefix="preview">Preview</Button>
              </td>
            </tr>
            <tr>
              <td className="text-start">
                <Media>
                  <Image src="../image/pdf.png" />
                  <Media.Body>Lorem ipsum dolor sit amet, consectetur</Media.Body>
                </Media>
              </td>
              <td className="text-center">404.80 kb</td>
              <td className="text-center">
                <Button bsPrefix="download mb3">Download</Button>
                <Button bsPrefix="preview">Preview</Button>
              </td>
            </tr>
            <tr>
              <td className="text-start">
                <Media>
                  <Image src="../image/pdf.png" />
                  <Media.Body>Lorem ipsum dolor sit amet, consectetur</Media.Body>
                </Media>
              </td>
              <td className="text-center">404.80 kb</td>
              <td className="text-center">
                <Button bsPrefix="download mb3">Download</Button>
                <Button bsPrefix="preview">Preview</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default LeaningList;
