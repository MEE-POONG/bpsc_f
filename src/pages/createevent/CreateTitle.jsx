import React, {useEffect} from "react";
import {useState} from "react";
import {Container, Image, Form, Row, Col, Badge} from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {API_CREATE_EVENT, IMAGE_URL} from "../../apis";

import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {Typeahead} from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const CreateTitle = () => {
  const [contentData, setContentData] = useState({
    title: "",
    content: "",
    location: "",
    time: "",
    eventStart: "",
    eventEnd: "",
  });
  const navigate = useNavigate();

  const createContent = () => {
    API_CREATE_EVENT(contentData)
      .then((e) => {
        Swal.fire("สำเร็จ!", "สร้างกิจกรรมสำเร็จ!", "success").then(() => {
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
              onMouseOver={() => setContentData({...contentData, isDraft: "false"})}
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
          <h1>เนื้อหากิจกรรม</h1>
        </div>
      </Container>

      <Container className="px-0">
        <div className="box-sheare detail">
          <Row>
            <Col md="12" lg="12">
              <div className="header">
                <Form.Group controlId="formBasicTitle">
                  <Form.Label>ชื่อกิจกรรม</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ชื่อกิจกรรม"
                    onChange={(e) => {
                      setContentData({...contentData, title: e.target.value});
                    }}
                  />
                </Form.Group>
              </div>
            </Col>
            <Col xs="12" lg="12">
              <div className="header">
                <Form.Group controlId="formBasicLocation">
                  <Form.Label>สถานที่จัดกิจกรรม</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ระบุพิกัดสถานที่"
                    onChange={(e) => {
                      setContentData({...contentData, location: e.target.value});
                    }}
                  />
                </Form.Group>
              </div>
            </Col>
            <Col xs="4" lg="4">
              <div className="header">
                <Form.Group controlId="formBasicDateStart">
                  <Form.Label>วันที่เริ่ม</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="วันที่เริ่มกิจกรรม"
                    onChange={(e) => {
                      setContentData({...contentData, eventStart: e.target.value});
                    }}
                  />
                </Form.Group>
              </div>
            </Col>
            <Col xs="4" lg="4">
              <div className="header">
                <Form.Group controlId="formBasicDateEnd">
                  <Form.Label>วันที่สิ้นสุด</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="วันที่สิ้นสุดกิจกรรม"
                    onChange={(e) => {
                      setContentData({...contentData, eventEnd: e.target.value});
                    }}
                  />
                </Form.Group>
              </div>
            </Col>
            <Col xs="4" lg="4">
              <div className="header">
                <Form.Group controlId="formBasicTime">
                  <Form.Label>เวลา</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="เวลา"
                    onChange={(e) => {
                      setContentData({...contentData, time: e.target.value});
                    }}
                  />
                </Form.Group>
              </div>
            </Col>
            <Col xs="12">
              <div className="header">
                {/* <Form.Group controlId="formBasicDetail">
                  <Form.Label>รายละเอียด</Form.Label>
                  <Form.Control
                    type="text"
                    id="content"
                    as="textarea"
                    rows="10"
                    onChange={(e) => {
                      setContentData({...contentData, content: e.target.value});
                    }}
                  />
                </Form.Group> */}
                <CKEditor
                  onChange={(evt) => {
                    setContentData({...contentData, content: evt.editor.getData()});
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CreateTitle;
