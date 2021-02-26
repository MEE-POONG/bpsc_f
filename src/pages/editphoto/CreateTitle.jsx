import React, {useEffect} from "react";
import {useState} from "react";
import {Container, Image, Form, Row, Col, Badge} from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {API_UPDATE_GALLERY_PHOTO, API_GET_DOCTOR_BY_ID, IMAGE_URL} from "../../apis";

import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {Typeahead} from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import {useParams} from "react-router-dom";

const CreateTitle = () => {
  const {id} = useParams();

  const [sharingData, setSharingData] = useState({
    title: "",
    description: "",
  });
  const [imgData, setImgData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API_GET_DOCTOR_BY_ID(id).then((result) => {
      setSharingData({
        title: result?.data?.title || "",
        description: result?.data?.description || "",
      });
    });
  }, []);

  const createSharing = () => {
    API_DEL_GALLERY_PHOTO_BY_ID(id, sharingData)
      .then((e) => {
        Swal.fire("สำเร็จ!", "แก้ไขข้อมูลสำเร็จ!", "success").then(() => {
          navigate(-1);
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: e?.response?.data?.error,
          text: e?.response?.data?.message,
        });
      });
  };
  return (
    <div>
      <div className="tab-btn mb-5">
        <Container>
          <div className="d-flex justify-content-end">
            <div
              className="share"
              onClick={async () => {
                createSharing();
              }}
            >
              เผยแพร่
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="title">
          <h1>ข้อมูล Doctor </h1>
        </div>
      </Container>
      <Container className="px-0">
        <div className="box-sheare detail">
          <Row>
            <Col md="6">
              <div className="header">
                <Form.Group controlId="formBasictitle">
                  <Form.Label>ชื่อจริง({sharingData.title.length})</Form.Label>
                  <Form.Control
                    type="text"
                    value={sharingData.title}
                    onChange={(e) => {
                      setSharingData({...sharingData, title: e.target.value});
                    }}
                  />
                </Form.Group>
                {/* <Form.Group controlId="formBasicEmail">
                    <Form.Label>รายละเอียดย่อของ (0/300)</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      onChange={(e) => {
                        setSharingData({...sharingData, content: e.target.value});
                      }}
                    />
                  </Form.Group> */}
              </div>
            </Col>
            <Col md="6">
              <div className="header">
                <Form.Group controlId="formBasicdescription">
                  <Form.Label>นามสกุล({sharingData.description.length})</Form.Label>
                  <Form.Control
                    type="text"
                    value={sharingData.description}
                    onChange={(e) => {
                      setSharingData({...sharingData, description: e.target.value});
                    }}
                  />
                </Form.Group>
                {/* <Form.Group controlId="formBasicEmail">
                    <Form.Label>รายละเอียดย่อของ (0/300)</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      onChange={(e) => {
                        setSharingData({...sharingData, content: e.target.value});
                      }}
                    />
                  </Form.Group> */}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CreateTitle;
