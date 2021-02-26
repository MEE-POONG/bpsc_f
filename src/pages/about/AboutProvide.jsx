import React from "react";
import { Col, Container, Image, Row, Media } from "react-bootstrap";

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
            <Col lg="3" md="3" sm="3" xs="12">
              <img
                className="provide-icon"
                src="image/about/medical-mask-2.png"
                alt="Generic placeholder"
              />
            </Col>
            <Col lg="6" md="6" sm="6" xs="12">
              <img

                className="img-provide"
                src="image/about/co-join.png"
                alt="Generic placeholder"
              />
            </Col>
            <Col lg="3" md="3" sm="3" xs="12">

            </Col>
            <Col lg="3" md="3" sm="3" xs="12">

            </Col>
          </Row>
          <Row>

            <Col lg="6" md="6" sm="6" xs={{ span: 12, order: 'last' }}>
              <img
                className="img-provide"
                src="image/about/co-create.png"
                alt="Generic placeholder"
              />
            </Col>
            <Col lg="3" md="3" sm="3" xs={{ span: 12, order: 'first' }}>
              <img
                className="provide-icon"
                src="image/about/hospital-1.png"
                alt="Generic placeholder"
              />
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
