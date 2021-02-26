import React, {useEffect} from "react";
import {useState} from "react";
import {Container, Image, Form, Row, Col, Badge} from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {
  API_CREATE_GALLERY,
  API_UPDATE_GALLERY_COVER,
  API_CREATE_GALLERY_PHOTO,
  IMAGE_URL,
} from "../../apis";

import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const CreateTitle = () => {
  const [contentData, setContentData] = useState({
    title: "",
    content: "",
  });
  const [imgData, setImgData] = useState(null);
  const [imgMulData, setImgMulData] = useState(null);
  const navigate = useNavigate();

  const createGallery = () => {
    API_CREATE_GALLERY(contentData)
      .then((e) => {
        // console.log(e);
        Swal.fire("สำเร็จ!", "สร้างแกลเลอรี่สำเร็จ!", "success").then(() => {
          if (!imgData && !imgMulData) {
            navigate(-1);
          }
          // console.log(imgData);
          if (imgData) {
            API_UPDATE_GALLERY_COVER(e?.data?.id, imgData)
              .then((e) => {
                // console.log(e);
                Swal.fire("สำเร็จ!", "บันทึกรูปแกลเลอรี่สำเร็จ!", "success").then(() =>
                  navigate(-1)
                );
              })
              .catch(() =>
                Swal.fire({
                  icon: "error",
                  title: e?.response?.data?.error,
                  text: e?.response?.data?.message,
                })
              );
          }
          if (imgMulData) {
            API_CREATE_GALLERY_PHOTO(e?.data?.id, imgMulData)
              .then((e) => {
                console.log(imgMulData);
                console.log(e);
                Swal.fire("สำเร็จ!", "บันทึกรูปแกลเลอรี่สำเร็จ!", "success").then(() =>
                  navigate(-1)
                );
              })
              .catch(() =>
                Swal.fire({
                  icon: "error",
                  title: e?.response?.data?.error,
                  text: e?.response?.data?.message,
                })
              );
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
              className="share"
              onMouseOver={() => setContentData({...contentData})}
              onClick={async () => {
                createGallery();
              }}
            >
              เผยแพร่
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="title">
          <h1>เนื้อหาแกลเลอรี่</h1>
        </div>
      </Container>
      <Container className="box-sheare">
        <Row className="d-block w-100 m-auto">
          <Col md="12">
            <div className="up-img">
              <div className="text-up">ภาพปก</div>
              <form>
                <input
                  id="file"
                  type="file"
                  onChange={(e) => setImgData(e.target.files[0])}
                />
                <label htmlFor="file">
                  <span
                    tabIndex="0"
                    className="btn-img"
                    role="button"
                    aria-controls="filename"
                  >
                    เลือกไฟล์
                  </span>
                </label>
              </form>
            </div>
          </Col>
          <Col md="12">
            <div
              style={{
                textAlignLast: "center",
              }}
            >
              <Image
                src={
                  imgData
                    ? URL.createObjectURL(imgData)
                    : "https://chiccarrent.com/files/images/default-placeholder.png"
                }
                style={{
                  maxWidth: "500px",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="px-0">
        <div className="box-sheare detail d-block">
          <Row>
            <Col lg="12">
              <div className="header">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>ชื่อแกลเลอรี่({contentData.title.length}/50)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ชื่อแกลเลอรี่"
                    onChange={(e) => {
                      setContentData({...contentData, title: e.target.value});
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>รายละเอียดย่อของแกลเลอรี่ (0/300)</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    onChange={(e) => {
                      setContentData({...contentData, content: e.target.value});
                    }}
                  />
                </Form.Group>
              </div>
            </Col>
            {/* <Col lg="12">
              <CKEditor
                onChange={(evt) => {
                  setContentData({...contentData, content: evt.editor.getData()});
                }}
                // onChange={(evt) => console.log(evt.editor.getData())}
                // data={this.state.events_detail_th}
                // onChange={this.onEditorTHChange}
                // config={{
                //   filebrowserBrowseUrl: 'http://localhost:3000/#/gallery/',
                // }}
              />
            </Col> */}
          </Row>
        </div>
      </Container>

      <div className="tag">
        <Container>
          <div>
            <h1>เพิ่มแกลเลอรี่</h1>
          </div>
        </Container>
        <Container className="box-sheare">
          <div className="up-img text-center d-block w-100">
            <div className="text-up">ภาพแกลเลอรี่</div>
            <form>
              <input
                id="file2"
                type="file"
                onChange={(e) => setImgMulData(e.target.files)}
                multiple
              />
              <label htmlFor="file2">
                <span
                  tabIndex="20"
                  className="btn-img"
                  role="button"
                  aria-controls="filename"
                >
                  เลือกไฟล์
                </span>
              </label>
            </form>
            {imgMulData ? (
              <Row>
                {Array.from(imgMulData)?.map((e) => (
                  <Col>
                    <div>
                      <Image
                        src={
                          e
                            ? URL.createObjectURL(e)
                            : "https://chiccarrent.com/files/images/default-placeholder.png"
                        }
                        style={{
                          maxWidth: "150px",
                        }}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            ) : (
              <Row>
                <Col>
                  <div>
                    <Image
                      src={"https://chiccarrent.com/files/images/default-placeholder.png"}
                      style={{
                        maxWidth: "150px",
                      }}
                    />
                  </div>
                </Col>
              </Row>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CreateTitle;
