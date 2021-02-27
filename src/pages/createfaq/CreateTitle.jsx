import React, {useEffect} from "react";
import {useState} from "react";
import {Container, Image, Form, Row, Col, Badge} from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {API_CREATE_FAQ} from "../../apis";

import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {Typeahead} from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const CreateTitle = () => {
  const [sharingData, setSharingData] = useState({
    question: "",
    answer: "",
  });
  const navigate = useNavigate();

  const createSharing = () => {
    API_CREATE_FAQ(sharingData)
      .then((e) => {
        Swal.fire("สำเร็จ!", "สร้าง FAQ สำเร็จ!", "success").then(() => {
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
          <h1>เนื้อหา FAQ</h1>
        </div>
      </Container>
      <Container className="px-0">
        <div className="box-sheare detail">
          <Col xs="12">
            <Row>
              <Col md="12">
                <div className="header">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>ชื่อ FAQ</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ชื่อ FAQ"
                      onChange={(e) => {
                        setSharingData({...sharingData, question: e.target.value});
                      }}
                    />
                  </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>รายละเอียดย่อของหมอ (0/300)</Form.Label> */}
                    <Form.Control
                      type="text"
                      as="textarea"
                      onChange={(e) => {
                        setSharingData({...sharingData, answer: e.target.value});
                      }}
                    />
                  </Form.Group>
                </div>
              </Col>
              {/* <Col xs="12">
                <CKEditor
                  onChange={(evt) => {
                    setSharingData({...sharingData, answer: evt.editor.getData()});
                  }}
                />
              </Col> */}
            </Row>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default CreateTitle;
