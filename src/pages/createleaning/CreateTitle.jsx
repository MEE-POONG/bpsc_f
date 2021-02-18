import React, {useEffect} from "react";
import {useState} from "react";
import {Container, Image, Form, Row, Col, Badge} from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {
  API_CREATE_LEANING,
  API_GET_TAGS,
  API_UPDATE_LEANING_COVER,
  IMAGE_URL,
} from "../../apis";

import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {Typeahead} from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const CreateTitle = () => {
  const [sharingData, setSharingData] = useState({
    title: "",
    content: "",
    videoLink: "",
    tags: [],
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
    API_CREATE_LEANING(sharingData)
      .then((e) => {
        // console.log(e);
        Swal.fire("สำเร็จ!", "สร้างบทเรียนสำเร็จ!", "success").then(() => {
          // console.log(imgData);
          if (imgData) {
            API_UPDATE_LEANING_COVER(e?.data?.id, imgData)
              .then((e) => {
                // console.log(e);
                Swal.fire("สำเร็จ!", "บันทึกรูปบทเรียนสำเร็จ!", "success").then(() =>
                  navigate(-1)
                );
              })
              .catch(() =>
                Swal.fire({
                  icon: "error",
                  title: e?.error,
                  text: e?.message,
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
          title: e?.error,
          text: e?.message,
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
              onMouseOver={() => setSharingData({...sharingData, isDraft: "false"})}
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
          <h1>เนื้อหาบทเรียน</h1>
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
                  <Form.Label>ชื่อบทเรียน({sharingData.title.length}/50)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ชื่อบทเรียน"
                    id="title"
                    onChange={(e) => {
                      setSharingData({...sharingData, title: e.target.value});
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>LINK YOUTUBE</Form.Label>
                  <Form.Control
                    type="text"
                    id="video"
                    // as="textarea"Î
                    onChange={(e) => {
                      setSharingData({...sharingData, videoLink: e.target.value});
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>CONTENT</Form.Label>
                  <Form.Control
                    type="text"
                    id="content"
                    as="textarea"
                    onChange={(e) => {
                      setSharingData({...sharingData, content: e.target.value});
                    }}
                  />
                </Form.Group>
              </div>
            </Col>
            <Col lg="12">
              {/* <CKEditor
                onChange={(evt) => {
                  setSharingData({...sharingData, content: evt.editor.getData()});
                }}
                // onChange={(evt) => console.log(evt.editor.getData())}
                // data={this.state.events_detail_th}
                // onChange={this.onEditorTHChange}
                // config={{
                //   filebrowserBrowseUrl: 'http://localhost:3000/#/gallery/',
                // }}
              /> */}
            </Col>
          </Row>
        </div>
      </Container>

      <div className="tag">
        <Container>
          <div>
            <h1>ติด Tag ให้บทเรียน</h1>
          </div>
        </Container>
        <Container className="input-tag">
          {/* <Badge pill variant="primary">
            Primary
          </Badge> */}
          {/* <Form> */}
          {/* <Form.Group controlId="formBasicEmail"> */}
          {/* <Form.Label>รายละเอียดย่อของบทเรียน (0/300)</Form.Label> */}
          {/* <Form.Control type="text" as="textarea" /> */}
          {/* </Form.Group> */}
          {/* </Form> */}
          <Form.Group style={{marginTop: "20px"}}>
            {/* <Form.Label>รายละเอียดย่อของบทเรียน</Form.Label> */}
            <Typeahead
              id="basic-typeahead-multiple"
              labelKey="name"
              multiple
              onChange={(e) => setSharingData({...sharingData, tags: e})}
              options={tagData?.data}
              labelKey="title"
              placeholder="เลือก TAG"
              selected={sharingData.tag}
            />
          </Form.Group>
        </Container>
      </div>
    </div>
  );
};

export default CreateTitle;
