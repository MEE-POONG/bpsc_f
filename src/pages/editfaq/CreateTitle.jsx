import React, {useEffect} from "react";
import {useState} from "react";
import {Container, Image, Form, Row, Col, Badge} from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {API_CREATE_FAQ, API_GET_FAQ_BY_ID, API_UPDATE_FAQ} from "../../apis";

import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {Typeahead} from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import {useParams} from "react-router-dom";

const CreateTitle = () => {
  const {id} = useParams();

  const [sharingData, setSharingData] = useState({
    question: "",
    answer: "",
  });

  useEffect(() => {
    API_GET_FAQ_BY_ID(id).then((result) => {
      setSharingData({
        question: result?.data?.question,
        answer: result?.data?.answer,
      });
    });
  }, []);

  const navigate = useNavigate();

  const createSharing = () => {
    API_UPDATE_FAQ(id, sharingData)
      .then((e) => {
        Swal.fire("สำเร็จ!", "แก้ไข FAQ สำเร็จ!", "success").then(() => {
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
                    <Form.Label>ชื่อ FAQ({sharingData.question.length})</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ชื่อ FAQ"
                      value={sharingData.question}
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
                      value={sharingData.answer}
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
