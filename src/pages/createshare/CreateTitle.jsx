
import React from "react";
import { Container, Image, Form } from "react-bootstrap";
const CreateTitle = () => {
  return (
    <div>
      <div className="tab-btn mb-5">
        <Container >
          <div className="d-flex justify-content-end">
            <div className="save">
              บันทุกแบบล่าง
            </div>
            <div className="share">
              เผยแพร่
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="title">
          <h1>เนื้อหาแชร์</h1>
        </div>
      </Container>
      <Container className="box-sheare justify-content-between">
        <div className="up-img">
          <div className="text-up">
            ภาพปก
          </div>
          <div className="btn-img">
            เลือกไฟล์
          </div>
          <div className="scroll-img">
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
            <Image src="image/home/home1.png" />
          </div>
        </div>
        <div className="views-img">
          <Image src="image/home/home1.png" />
        </div>
        <div className="header">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>ชื่อแชร์(0/50)</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>รายละเอียดย่อของแชร์  (0/300)</Form.Label>
            <Form.Control type="text" as="textarea" />
          </Form.Group>
        </div>
      </Container>
    </div>

  );
}

export default CreateTitle;
