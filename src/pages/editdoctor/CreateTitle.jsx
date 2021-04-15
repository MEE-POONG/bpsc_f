import React, {useEffect} from "react";
import {useState} from "react";
import {Container, Image, Form, Row, Col, Badge} from "react-bootstrap";
import CKEditor from "ckeditor4-react";

import {
  API_UPDATE_DOCTOR,
  API_GET_TAGS,
  API_GET_DOCTOR_BY_ID,
  API_UPDATE_DOCTOR_COVER,
  IMAGE_URL,
} from "../../apis";

import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {Typeahead} from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import {useParams} from "react-router-dom";

const CreateTitle = () => {
  const {id} = useParams();

  const [tagData, setTagData] = useState(null);
  const [imgDataURL, setImgDataURL] = useState(null);
  const [sharingData, setSharingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    content: "",
    hospital: "",
    bio: "",
    tags: [],
  });
  const [imgData, setImgData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API_GET_TAGS()
      .then((e) => {
        setTagData(e?.data);
        // setSharingData({...sharingData, tags: e?.data.filter()})
      })
      .catch();
  }, []);
  useEffect(() => {
    API_GET_DOCTOR_BY_ID(id).then((result) => {
      setSharingData({
        firstName: result?.data?.doctor?.firstName|| "",
        lastName: result?.data?.doctor?.lastName|| "",
        email: result?.data?.doctor?.email || "",
        phone: result?.data?.doctor?.phone|| "",
        content: result?.data?.doctor?.content|| "",
        hospital: result?.data?.doctor?.hospital|| "",
        bio: result?.data?.doctor?.bio|| "",
        picture: result?.data?.doctor?.picture|| "",
        tags: result?.data?.tags,
      });
      setImgDataURL(IMAGE_URL + result?.data?.doctor?.picture);
    });
  }, []);

  const createSharing = () => {
    API_UPDATE_DOCTOR(id, sharingData)
      .then((e) => {
        // console.log(e);
        Swal.fire("สำเร็จ!", "แก้ไขข้อมูลหมอสำเร็จ!", "success").then(() => {
          // console.log(imgData);
          if (imgData) {
            API_UPDATE_DOCTOR_COVER(e?.data?.id, imgData)
              .then((e) => {
                // console.log(e);
                Swal.fire("สำเร็จ!", "บันทึกรูปหมอสำเร็จ!", "success").then(() =>
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
          <h1>ข้อมูล Doctor </h1>
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
        <div className="box-sheare detail">
          <Row>
            <Col md="6">
              <div className="header">
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>ชื่อจริง</Form.Label>
                  <Form.Control
                    type="text"
                    value={sharingData.firstName}
                    onChange={(e) => {
                      setSharingData({...sharingData, firstName: e.target.value});
                    }}
                  />
                </Form.Group>
                {/* <Form.Group controlId="formBasicEmail">
                    <Form.Label>รายละเอียดย่อของหมอ (0/300)</Form.Label>
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
            <Col md="6">
              <div className="header">
                <Form.Group controlId="formBasicLastName">
                  <Form.Label>นามสกุล</Form.Label>
                  <Form.Control
                    type="text"
                    value={sharingData.lastName}
                    onChange={(e) => {
                      setSharingData({...sharingData, lastName: e.target.value});
                    }}
                  />
                </Form.Group>
                {/* <Form.Group controlId="formBasicEmail">
                    <Form.Label>รายละเอียดย่อของหมอ (0/300)</Form.Label>
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
            <Col md="6">
              <div className="header">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>E mail</Form.Label>
                  <Form.Control
                    type="text"
                    value={sharingData.email}
                    onChange={(e) => {
                      setSharingData({...sharingData, email: e.target.value});
                    }}
                  />
                </Form.Group>
                {/* <Form.Group controlId="formBasicEmail">
                    <Form.Label>รายละเอียดย่อของหมอ (0/300)</Form.Label>
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
            <Col md="6">
              <div className="header">
                <Form.Group controlId="formBasicTel">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    value={sharingData.phone}
                    onChange={(e) => {
                      setSharingData({...sharingData, phone: e.target.value});
                    }}
                  />
                </Form.Group>
                {/* <Form.Group controlId="formBasicEmail">
                    <Form.Label>รายละเอียดย่อของหมอ (0/300)</Form.Label>
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
            <Col md="6">
              <div className="header">
                <Form.Group controlId="formBasicContent">
                  <Form.Label>content</Form.Label>
                  <Form.Control
                    type="text"
                    value={sharingData.content}
                    onChange={(e) => {
                      setSharingData({...sharingData, content: e.target.value});
                    }}
                  />
                </Form.Group>
                {/* <Form.Group controlId="formBasicEmail">
                    <Form.Label>รายละเอียดย่อของหมอ (0/300)</Form.Label>
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
            <Col md="6">
              <div className="header">
                <Form.Group controlId="formBasicHospital">
                  <Form.Label>hospital</Form.Label>
                  <Form.Control
                    type="text"
                    value={sharingData.hospital}
                    onChange={(e) => {
                      setSharingData({...sharingData, hospital: e.target.value});
                    }}
                  />
                </Form.Group>
              </div>
            </Col>
            <Col md="12">
              <div className="header">
                <Form.Group controlId="formBasicBio">
                  <Form.Label>bio</Form.Label>
                  <Form.Control
                    type="text"
                    value={sharingData.bio}
                    onChange={(e) => {
                      setSharingData({...sharingData, bio: e.target.value});
                    }}
                  />
                </Form.Group>
              </div>
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
              selected={sharingData.tags}
              defaultSelected={sharingData.tags}
              // defaultSelected={tagData?.data?.slice(0, 4)}
            />
          </Form.Group>
        </Container>
      </div>
      <div className="p-5"></div>
      <div className="p-5"></div>
    </div>
  );
};

export default CreateTitle;
