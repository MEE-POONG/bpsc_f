import React from "react";
import {Col, Container, Image, Row, Media, Card} from "react-bootstrap";
import AboutAffiliateNetwork from "./AboutAffiliateNetwork";

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
              <Card.Img
                className="provide-icon"
                src="image/about/medical-mask-2.png"
                alt="Generic placeholder"
              />
            </Col>
            <Col lg="6" md="6" sm="6" xs="12">
              <Card.Img
                className="img-provide"
                src="image/about/co-join.png"
                alt="Generic placeholder"
              />
            </Col>
            <Col lg="3" md="3" sm="3" xs="12"></Col>
            <Col lg="3" md="3" sm="3" xs="12"></Col>
          </Row>
          <Row>
            <Col
              lg={{span: 6, order: "first", offset: 3}}
              md={{span: 6, order: "first", offset: 3}}
              sm={{span: 6, order: "first", offset: 3}}
              xs={{span: 12, order: "last"}}
            >
              <Card.Img
                className="img-provide"
                src="image/about/co-create.png"
                alt="Generic placeholder"
              />
            </Col>
            <Col
              lg={{span: 3, order: "last"}}
              md={{span: 3, order: "last"}}
              sm={{span: 3, order: "last"}}
              xs={{span: 12, order: "first"}}
            >
              <Card.Img
                className="provide-icon"
                src="image/about/hospital-1.png"
                alt="Generic placeholder"
              />
            </Col>
          </Row>

          <AboutAffiliateNetwork />

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
            <Row style={{display:"table", width:"100%"}}>
              <div style={{display:"table-cell"}}>
                <Card.Img src="image/about/provide-1.png" />
              </div>
              <div style={{display:"table-cell"}}>
                <Card.Img src="image/about/provide-2.png" />
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default AboutProvide;
