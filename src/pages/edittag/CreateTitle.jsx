import React, {useEffect} from "react";
import {useState} from "react";
import {Container, Image, Form, Row, Col, Badge} from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {API_UPDATE_TAG, API_GET_TAG_BY_ID, API_DELETE_TAG, IMAGE_URL} from "../../apis";

import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {Typeahead} from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import {useParams} from "react-router-dom";
import moment from "moment";

const CreateTitle = () => {
  const {id} = useParams();
  const [contentData, setContentData] = useState({
    title: "",
  });

  useEffect(() => {
    API_GET_TAG_BY_ID(id).then((result) => {
      setContentData({
        title: result?.data?.title,
      });
    });
  }, []);
  const navigate = useNavigate();

  const createContent = () => {
    API_UPDATE_TAG(id, contentData)
      .then((e) => {
        Swal.fire("สำเร็จ!", "สร้างแท็กสำเร็จ!", "success").then(() => {
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
  const deleteContent = () => {
    Swal.fire("Are you sure!", "ต้องการลบใช่ไหม!", "info").then((result) => {
      if (result.isConfirmed) {
        API_DELETE_TAG(id)
          .then((e) => {
            Swal.fire("สำเร็จ!", "ลบแท็กสำเร็จ!", "success").then(() => {
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
      }
    });
  };
  return (
    <div>
      <div className="tab-btn mb-5">
        <Container>
          <div className="d-flex justify-content-end">
            <div
              className="save"
              onClick={async () => {
                deleteContent();
              }}
            >
              DELETE
            </div>
            <div
              className="share"
              onClick={async () => {
                createContent();
              }}
            >
              เผยแพร่
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="title">
          <h1>เนื้อหาแท็ก</h1>
        </div>
      </Container>

      <Container className="px-0">
        <div className="box-sheare detail">
          <Col md="12" lg="12">
            <Row>
              <Col md="12" lg="12">
                <div className="header">
                  <Form.Group controlId="formBasicTitle">
                    <Form.Label>ชื่อแท็ก</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ชื่อแท็ก"
                      value={contentData.title}
                      onChange={(e) => {
                        setContentData({...contentData, title: e.target.value});
                      }}
                    />
                  </Form.Group>
                </div>
              </Col>
            </Row>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default CreateTitle;
