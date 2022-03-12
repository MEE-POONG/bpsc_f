import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Image, Form, Row, Col, Badge } from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {
  API_CREATE_SHARING,
  API_GET_TAGS,
  API_UPDATE_SHARING_PHOTO,
  IMAGE_URL,
} from "../../apis";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const CreateTitle = () => {
  const [sharingData, setSharingData] = useState({
    title: "",
    content: "",
    isDraft: "true",
    tags: [],
    type: "",
  });

  const [typeData] = useState({
    data: [
      { id: 1, title: "คําแนะนําแบบสั้น ( BA )" },
      { id: 2, title: "คำปรึกษาแบบสั้น ( BI )" },
      { id: 3, title: "ฝึกสติแบบสั้น ( MBBI )" },
      { id: 4, title: "สติบําบัด ( MBTC )" },
    ],
  });
  const [tagData, setTagData] = useState(null);
  const [imgData, setImgData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API_GET_TAGS()
      .then((e) => {
        setTagData(e?.data);
      })
      .catch();
  }, []);
  const createSharing = () => {
    API_CREATE_SHARING(sharingData)
      .then((e) => {
        // console.log(e);
        Swal.fire("สำเร็จ!", "สร้างแชร์สำเร็จ!", "success").then(() => {
          // console.log(imgData);
          if (imgData) {
            API_UPDATE_SHARING_PHOTO(e?.data?.id, imgData)
              .then((e) => {
                // console.log(e);
                Swal.fire("สำเร็จ!", "บันทึกรูปแชร์สำเร็จ!", "success").then(() =>
                  navigate(-1)
                );
              })
              .catch((e) =>
                Swal.fire({
                  icon: "error",
                  title: e?.response?.data?.error,
                  text: e?.response?.data?.message,
                })
              );
          } else {
            navigate(-1);
          }
        });
      })
      .catch((e) => {
        // console.log(e);
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
              className="save"
              onMouseOver={() => setSharingData({ ...sharingData, isDraft: "true" })}
              onClick={() => {
                createSharing();
              }}
            >
              บันทึกแบบร่าง
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="title">
          <h1>ใส่ลิงค์ Youtube</h1>
        </div>
      </Container>
      <Container className="px-0">
        <div className="box-sheare detail">
          <Col xs="12">
            <Row>
              <Col md="12">
                <div className="header">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>ลิงค์ที่ต้องการแสดง</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ใส่ลิงค์"
                      onChange={(e) => {
                        setSharingData({ ...sharingData, title: e.target.value });
                      }}
                    />
                  </Form.Group>
                  {/* <Form.Group controlId="formBasicEmail">
                  <Form.Label>รายละเอียดย่อของแชร์ (0/300)</Form.Label>
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
              <Col xs="12">
                <iframe
                  title="This is a unique title"
                  src="https://www.youtube-nocookie.com/embed/EmOGnZTm3Ig"
                  width={"100%"}
                  height={"500px"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Col>
            </Row>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default CreateTitle;
