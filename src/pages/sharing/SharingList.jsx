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
import {faChevronDown, faEye, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

import {useParams} from "react-router-dom";

import {
  API_GET_SHARING_BY_ID,
  IMAGE_URL,
  API_fAVORITE_SHARING,
  API_UN_fAVORITE_SHARING,
} from "../../apis";
import moment from "moment";
import {useNavigate} from "react-router-dom";

const SharingList = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [sharing, setSharing] = useState(null);
  useEffect(() => {
    API_GET_SHARING_BY_ID(id).then((result) => {
      setSharing(result?.data);
    });
  }, []);
  const handleFav = (id) => {
    API_fAVORITE_SHARING(id)
      .then(() => {
        API_GET_SHARING_BY_ID(id).then((result) => {
          setSharing(result?.data);
        });
      })
      .catch();
  };
  const handleUnFav = (id) => {
    API_UN_fAVORITE_SHARING(id)
      .then(() => {
        API_GET_SHARING_BY_ID(id).then((result) => {
          setSharing(result?.data);
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
          {sharing?.sharing?.sharingPicture && (
            <Image
              src={IMAGE_URL + sharing?.sharing?.sharingPicture}
              alt={sharing?.sharing?.title}
              style={{
                maxWidth: "inherit",
              }}
            />
          )}
        </Col>
        <Col className="mb-5" xs="12" lg="12">
          <div
            className="h1 font-weight-bold"
            dangerouslySetInnerHTML={{__html: sharing?.sharing?.title}}
          />
          <div
            className="h3"
            dangerouslySetInnerHTML={{__html: sharing?.sharing?.content}}
          />
        </Col>
        <Col xs="12" lg="12">
          <h1>
            {sharing?.sharing?.firstName} {sharing?.sharing?.lastName}
          </h1>
          <h3 className="contact">
            <span className="mr-5">
              {moment(sharing?.sharing?.createAt).format("LL")}
            </span>
            <span className="mr-2">
              {sharing?.sharing?.isFavorite ? (
                <i className="fa fa fa-heart pr-2" onClick={() => handleUnFav(id)}></i>
              ) : (
                <i className="fa fa fa-heart-o pr-2" onClick={() => handleFav(id)}></i>
              )}
            </span>
            <span className="mr-5">{sharing?.sharing?.favorite}</span>
            <span className="mr-2">
              <FontAwesomeIcon className="pr-2" icon={faEye} />
            </span>
            <span className="mr-2">{sharing?.sharing?.view}</span>
          </h3>
        </Col>
        <Col xs="12" lg="12" className="mt-5">
          <span className="tag">แท็คที่เกี่ยวข้อง</span>
        </Col>
        <Col xs="12" lg="12" className="mt-5 tag-list">
          <div className="tag mr-5">
            {sharing?.tags?.map(({tag}) => (
              <p>{tag}</p>
            ))}
          </div>
        </Col>
      </Row>
      <div className="py-5" />
    </Container>
  );
};

export default SharingList;
