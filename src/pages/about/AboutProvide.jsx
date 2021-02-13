import React from "react";
import {Col, Container, Image, Row, Media} from "react-bootstrap";

const AboutProvide = () => {
  return (
    <div className="about-provide">
      <div className="scroll-num py-5 header">
        <Container className="text-center">
          <p className="title">What we provide?</p>
          <p className="subtitle">เข้าร่วม BPSC แล้วได้อะไร?</p>
        </Container>
      </div>
      <div className="mt-5 detail">
        <Container className="text-center">
          <Row>
            <Col lg="6">
              <Media>
                <img
                  className="provide-icon"
                  src="image/about/medical-mask-2.png"
                  alt="Generic placeholder"
                />
                <Media.Body className="text">
                  <h3>เข้าร่วม BPSC แล้วได้อะไร?</h3>
                  <p>
                    - สร้างรูปแบบการให้บริการทางพฤติกรรม ที่ตอบสนองความต้องการของผู้บริการ
                    แบบไม่แยกส่วน
                  </p>
                  <p>- นวัตกรรมที่มีประสิทธิภาพ</p>
                  <p>- มีการฝึกอบรมและระบบรับรองบุคลากรทุก ระดับ</p>
                  <p>- จัดบริการได้อย่างมีคุณภาพ</p>
                  <p>- มีระบบข้อมูลมาใช้ในการสร้างองค์ความรู้ และต่อยอดได้</p>
                </Media.Body>
              </Media>
            </Col>
            <Col lg="6">
              <Media>
                <img
                  className="provide-icon"
                  src="image/about/hospital-1.png"
                  alt="Generic placeholder"
                />
                <Media.Body className="text">
                  <h3>ร่วมสร้างการเปลี่ยนแปลงไปกับเรา</h3>
                  <h5>BPSC เปิดรับโรงพยาบาลทุกระดับ</h5>
                  <p>- โรงพยาบาลชุมชลรวมทั้งเครือข่าย</p>
                  <p>- โรงพยาบาลทั่วไปและโรงพลาบาลศูนย์</p>
                  <p>- โรงพยาบาลเฉพาะทาง</p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
          <div className="provide-title">
            <h1>BPSC</h1>
            <h1>
              พร้อมที่จะนำพาโรงพยาบาลก้าวไปสู่การรักษาที่ดียิ่งกว่าด้วยระบบพัฒนาที่มีศักยภาพ
            </h1>
            <hr />
            <img
              className="img-provide"
              src="image/about/provide.png"
              alt="Generic placeholder"
            />
          </div>
          <div className="Innovation">
            <img className="Innovation-img-left" src="image/about/provide-1.png" />
            <img className="Innovation-img-right" src="image/about/provide-2.png" />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default AboutProvide;
