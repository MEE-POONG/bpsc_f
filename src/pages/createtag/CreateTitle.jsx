import React, {useEffect} from "react";
import {useState} from "react";
import {Container, Image, Form, Row, Col, Button, Badge} from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {API_CREATE_TAG, IMAGE_URL, API_GET_TAGS} from "../../apis";

import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {Typeahead} from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const CreateTitle = () => {
  const [tagData, setTagData] = useState(null);
  const [page, setPage] = useState(1);

  const [contentData, setContentData] = useState({
    title: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    API_GET_TAGS(page).then((result) => {
      setTagData(result?.data);
    });
  }, [page]);

  const createContent = () => {
    API_CREATE_TAG(contentData)
      .then((e) => {
        Swal.fire("สำเร็จ!", "สร้างแท็กสำเร็จ!", "success").then(() => {
          navigate(0);
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
              onMouseOver={() => setContentData({...contentData})}
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
                    <Form.Label>ชื่อแท็ก({contentData.title.length}/50)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ชื่อแท็ก"
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

      <Container className="px-0">
        <div className="box-sheare detail">
          {tagData?.data?.map(({id, title}) => (
            <Button variant="primary" onClick={() => navigate("/edit-tag/" + id)}>
              {title}
            </Button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CreateTitle;
