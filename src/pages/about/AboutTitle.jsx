import React from "react";
import { Container } from "react-bootstrap";

const AboutTitle = () => {
  return (
    <div className="about-title">
      <div className="scroll-num py-5 about-title-bg">
        <Container className="text-center">
          <p className="h1 font-weight-bold">about BPSC</p>
          <p className="h3">ภาพระบบสาธารณะสุขที่เราวาดฝัน</p>
          <p className="h5 pt-5">
            เป็นระบบสาธารณะสุขที่ทั้งบุคลากรและผู้รับบริการ
            ได้ช่วยรักษากันและกัน มากกว่าเพียงแค่การจ่ายยา...
          </p>
        </Container>
      </div>
    </div>
  );
};
export default AboutTitle;
