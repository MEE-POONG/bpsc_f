import React, {useEffect} from "react";
import {useState} from "react";
import {Container, Image, Form, Row, Col, Badge} from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {API_CREATE_HOSPITAL, API_GET_HOSPITAL, API_UPDATE_HOSPITAL} from "../../apis";

import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {Typeahead} from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import {useParams} from "react-router-dom";

const CreateTitle = () => {

  const [sharingData, setSharingData] = useState({
    normal: "",
    prototype: "",
  });

  useEffect(() => {
    API_GET_HOSPITAL().then((result) => {
      setSharingData({
        normal: result?.data?.hospital,
        prototype: result?.data?.prototype,
      });
    });
  }, []);

  const navigate = useNavigate();

  const createSharing = () => {
    API_UPDATE_HOSPITAL(sharingData)
      .then((e) => {
        Swal.fire("สำเร็จ!", "แก้ไข HOSPITAL สำเร็จ!", "success").then(() => {
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
          <h1>เนื้อหา HOSPITAL</h1>
        </div>
      </Container>
      <Container className="px-0">
        <div className="box-sheare detail">
          <Col xs="12">
            <Row>
              <Col md="12">
                <div className="header">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>เกิดเป็นโรงพยาบาลต้นแบบ</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="โรงพยาบาลสร้างระบบ BPSC สำเร็จ"
                      value={sharingData.prototype}
                      onChange={(e) => {
                        setSharingData({...sharingData, normal: e.target.value});
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>โรงพยาบาลสร้างระบบ BPSC สำเร็จ</Form.Label>
                    <Form.Control
                      type="text"
                      value={sharingData.normal}
                      onChange={(e) => {
                        setSharingData({...sharingData, prototype: e.target.value});
                      }}
                    />
                  </Form.Group>
                </div>
              </Col>
              {/* <Col xs="12">
                <CKEditor
                  onChange={(evt) => {
                    setSharingData({...sharingData, prototype: evt.editor.getData()});
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
