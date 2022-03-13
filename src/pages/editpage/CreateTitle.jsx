import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Image, Form, Row, Col, Badge } from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {
  API_CREATE_SHARING,
  API_GET_HOMEVIDEOLINK,
  API_PUT_HOMEVIDEOLINK,
  API_UPDATE_SHARING_PHOTO,
} from "../../apis";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const CreateTitle = () => {
  const [data, setData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    API_GET_HOMEVIDEOLINK()
      .then((e) => {
        setData(e?.data?.Value);
      })
      .catch();
  }, []);
  const createSharing = () => {
    API_PUT_HOMEVIDEOLINK(data)
      .then((e) => {
        // console.log(e);
        Swal.fire("สำเร็จ!", "สำเร็จ!", "success").then(() => {
          API_GET_HOMEVIDEOLINK()
            .then((e) => {
              setData(e?.data?.Value);
            })
            .catch();
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
              onClick={() => {
                createSharing();
              }}
            >
              บันทึก
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
                      value={data}
                      onChange={(e) => {
                        setData(e.target.value);
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
                  src={data}
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
