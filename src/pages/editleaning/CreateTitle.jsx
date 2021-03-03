import React, {useEffect} from "react";
import {useState} from "react";
import {Container, Image, Form, Row, Col, Badge} from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {
  API_UPDATE_LEANING,
  API_GET_TAGS,
  API_UPDATE_LEANING_COVER,
  API_GET_ELEARNING_BY_ID,
  IMAGE_URL,
} from "../../apis";

import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {Typeahead} from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import {useParams} from "react-router-dom";

const CreateTitle = () => {
  const {id} = useParams();
  const [learningData, setLearningData] = useState({
    title: "",
    content: "",
    videoLink: "",
    tags: [],
    type: "",
  });
  const [tagData, setTagData] = useState(null);

  const [typeData] = useState({
    data: [
      {id: 1, title: "BPSC TALK"},
      {id: 2, title: "สร้าง รพ BPSC"},
      {id: 3, title: "E-LEARNING"},
      {id: 4, title: "Event"},
      {id: 5, title: "บทความ"},
    ],
  });
  const [imgData, setImgData] = useState(null);
  const [imgDataURL, setImgDataURL] = useState(null);
  useEffect(() => {
    API_GET_ELEARNING_BY_ID(id).then((result) => {
      setLearningData({
        title: result?.data?.elearning?.title,
        content: result?.data?.elearning?.content,
        videoLink: result?.data?.elearning?.videoLink,
        tags: result?.data?.tags,
        type: result?.data?.elearning?.type,
      });
      setImgDataURL(IMAGE_URL + result?.data?.elearning?.elearningPicture);
    });
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    API_GET_TAGS()
      .then((e) => {
        setTagData(e?.data);
        // setLearningData({...learningData, tags: e?.data.filter()})
      })
      .catch();
  }, []);
  const createLearning = () => {
    API_UPDATE_LEANING(id, learningData)
      .then((e) => {
        console.log(e);
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
              className="share"
              onMouseOver={() => setLearningData({...learningData})}
              onClick={async () => {
                createLearning();
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
        <Col xs="12">
          <Row>
            <Col xs="12">
              <div className="up-img">
                <div className="text-up">ภาพปก</div>
                <form
                // onSubmit={onSubmit}
                >
                  <input
                    id="file"
                    type="file"
                    // ref={fileInput}
                    // The onChange should trigger updates whenever
                    // the value changes?
                    // Try to select a file, then try selecting another one.
                    // onChange={forceUpdate}
                    // multiple
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

                {/* <div className="scroll-img"> */}
                {/* <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" /> */}
                {/* </div> */}
              </div>
            </Col>
            <Col md="12">
              <div
                style={{
                  textAlignLast: "center",
                }}
              >
                <Image
                  src={imgData ? URL.createObjectURL(imgData) : imgDataURL}
                  style={{
                    maxWidth: "500px",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Container>

      <Container className="px-0">
        <div className="box-sheare detail d-block">
          <Row>
            <Col md="12">
              <div className="header">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>ชื่อบทเรียน</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ชื่อบทเรียน"
                    value={learningData.title}
                    onChange={(e) => {
                      setLearningData({...learningData, title: e.target.value});
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>LINK YOUTUBE</Form.Label>
                  <Form.Control
                    type="text"
                    id="video"
                    value={learningData.videoLink}
                    onChange={(e) => {
                      setLearningData({...learningData, videoLink: e.target.value});
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>รายละเอียดย่อของบทเรียน</Form.Label>
                  {/* <Form.Control
                    type="text"
                    id="content"
                    as="textarea"
                    value={learningData.content}
                    onChange={(e) => {
                      setLearningData({...learningData, content: e.target.value});
                    }}
                  /> */}
                </Form.Group>
              </div>
            </Col>
            <Col xs="12">
              {learningData.content ? (
                <CKEditor
                  value={learningData.content}
                  onChange={(evt) => {
                    setLearningData({...learningData, content: evt.editor.getData()});
                  }}
                  // onChange={(evt) => console.log(evt.editor.getData())}
                  data={learningData.content}
                  // onChange={this.onEditorTHChange}
                  // config={{
                  //   filebrowserBrowseUrl: 'http://localhost:3000/#/gallery/',
                  // }}
                />
              ) : null}
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
              onChange={(e) => setLearningData({...learningData, tags: e})}
              options={tagData?.data}
              labelKey="title"
              placeholder="เลือก TAG"
              selected={learningData.tags}
              defaultSelected={learningData.tags}
              // defaultSelected={tagData?.data?.slice(0, 4)}
            />
          </Form.Group>
        </Container>
      </div>

      <div className="tag">
        <Container>
          <div>
            <h1>ติด Type ให้บทเรียน</h1>
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
              id="basic-typeahead"
              labelKey="name"
              onChange={(e) => {
                setLearningData({...learningData, type: e[0]?.id});
              }}
              options={typeData?.data}
              labelKey="title"
              placeholder="เลือก TYPE"
              selected={learningData?.type?.id}
              defaultSelected={typeData?.data?.filter(({id}) => id === 1)}
            />
          </Form.Group>
        </Container>
      </div>
    </div>
  );
};

export default CreateTitle;
