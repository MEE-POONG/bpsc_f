import React from "react";
import { Card, Container } from "react-bootstrap";

const AboutTitle = () => {
  return (
    <div className="about-title">
      <div className="scroll-num py-5 about-title-bg">
        <Container className="text-center">
          <p className="h1 font-weight-bold f-gradient">about BPSC</p>
          <Card.Body className="text-center">
            <p className="text-sub">ไม่ใช่แค่การรักษา แต่คือการมองชีวิต</p>
            <p className="text-detail">
              โครงการศูนย์จัดการความรู้การดูแลทางสังคมจิตใจในระบบสาธารณสุข
          </p>
          </Card.Body>
        </Container>
      </div>
    </div>
  );
};
export default AboutTitle;
