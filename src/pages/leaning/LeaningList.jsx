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
  Table,
} from "react-bootstrap";
import {
  faArrowRight,
  faChevronDown,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useParams} from "react-router-dom";

import {
  API_GET_ELEARNING_BY_ID,
  API_CREATE_COMMENT,
  API_GET_USER_INFO,
  API_fAVORITE_E_lEARNING,
  API_UN_fAVORITE_E_lEARNING,
  API_GET_LEARNING_COMMENT,
  API_GET_LEARNING_DOCUMENT,
  IMAGE_URL,
  DOWNLOAD_URL,
} from "../../apis";
import moment from "moment";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const LeaningList = () => {
  const {id} = useParams();
  const [userInfo, setUserInfo] = useState(null);

  const [elearning, setElearning] = useState(null);
  const [createComment, setCreateComment] = useState(null);
  const [comment, setComment] = useState(null);
  const [commentSearch, setCommentSearch] = useState(3);
  const setSearch = () => setCommentSearch((e) => (e += 3));
  const [document, setDocument] = useState(null);
  const [documentClick, setDocumentClick] = useState(1);
  const setClick = () => setDocumentClick((e) => (e += 1));
  const navigate = useNavigate();

  useEffect(() => {
    API_GET_ELEARNING_BY_ID(id).then((result) => {
      setElearning(result?.data);
    });

    API_GET_USER_INFO(localStorage.getItem("id")).then((result) => {
      setUserInfo(result?.data);
    });
  }, []);
  useEffect(() => {
    API_GET_LEARNING_DOCUMENT(id).then((result) => {
      setDocument(result?.data);
    });
  }, [documentClick]);
  useEffect(() => {
    API_GET_LEARNING_COMMENT(id, commentSearch).then((result) => {
      setComment(result?.data);
    });
  }, [commentSearch]);
  const handleCreateComment = () => {
    API_CREATE_COMMENT(id, {comment: createComment})
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "สำเร็จ",
          text: "แสดงความคิดเห็นสำเร็จ",
        }).then(() => {
          setSearch();
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: e?.error,
          text: e?.message,
        });
      });
  };

  const handleFav = (id) => {
    API_fAVORITE_E_lEARNING(id)
      .then(() => {
        API_GET_ELEARNING_BY_ID(id).then((result) => {
          setElearning(result?.data);
        });
      })
      .catch();
  };
  const handleUnFav = (id) => {
    API_UN_fAVORITE_E_lEARNING(id)
      .then(() => {
        API_GET_ELEARNING_BY_ID(id).then((result) => {
          setElearning(result?.data);
        });
      })
      .catch();
  };

  return (
    <Container className="leaning-list">
      <Row>
        <Col className="text-right" xs="12" lg="12">
          <NavLink to={() => {}} className="p-0 nav-link" onClick={() => navigate(-1)}>
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
              {elearning?.elearning?.isFavorite ? (
                <i className="fa fa fa-heart pr-2" onClick={() => handleUnFav(id)}></i>
              ) : (
                <i
                  className="fa fa fa-heart-o pr-2"
                  style={{cursor: "pointer"}}
                  onClick={() => handleFav(id)}
                ></i>
              )}
            </span>
            <span className="mr-5">{elearning?.elearning?.favorite}</span>
            <span className="mr-2">
              <FontAwesomeIcon className="pr-2" icon={faEye} />
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
              src={
                userInfo?.picture
                  ? IMAGE_URL + userInfo?.picture
                  : "https://chiccarrent.com/files/images/default-placeholder.png"
              }
              alt={comment}
            />
            <Media.Body>
              <FormControl
                bsPrefix="input-comment"
                as="textarea"
                placeholder={`${
                  localStorage.getItem("token")
                    ? "Add a Public Comment..."
                    : "กรุณาเข้าสู่ระบบเพื่อแสดงความคิดเห็น"
                }`}
                onChange={(e) => setCreateComment(e.target.value)}
                disabled={!localStorage.getItem("token")}
              />
            </Media.Body>
            <div
              style={{
                alignSelf: "center",
              }}
            >
              <button
                type="button"
                className="btn btn-success about-talk-with-us-btn-success"
                onClick={() => handleCreateComment()}
                disabled={!localStorage.getItem("token")}
              >
                SEND
              </button>
            </div>
          </Media>
        </Col>
      </Row>
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
          <Button bsPrefix="btn-show-list" onClick={setSearch}>
            <FontAwesomeIcon icon={faChevronDown} />
          </Button>
        ) : null}
      </Container>
      <Container className="sheet p-lg-5 p-md-5 mb-5">
        <Table responsive="sm">
          <tr style={{background: "#26beb4"}}>
            <th className="head-th text-left">เอกสารที่เกี่ยวข้อง</th>
            <th className="head-th ">Total Download</th>
            <th className="head-th">Download</th>
          </tr>
          <tbody className="file">
            {document?.map(({id, filename, Download}, idx) => (
              <tr>
                <td className="text-start">
                  <Media>
                    <Image src="https://sites.google.com/site/gansugsa/_/rsrc/1454402804802/google-doc/unnamed.png?height=200&width=200" />
                    <Media.Body>{filename}</Media.Body>
                  </Media>
                </td>
                <td className="text-center">{Download}</td>
                <td className="text-center">
                  <a href={DOWNLOAD_URL + id} onClick={setClick} target="_blank">
                    <Button bsPrefix="download mb3">Download</Button>
                  </a>
                  {/* <Button bsPrefix="preview">Preview</Button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default LeaningList;
