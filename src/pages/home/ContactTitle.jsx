import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Image } from "react-bootstrap";
const ContactTitle = () => {
  const navigate = useNavigate();
  return (
    <div style={{ lineHeight: "0" }}>
      <Container className="home-image text-uppercase py-5">
        <div className="row" style={{ alignContent: "center" }}>
          <div className="col-md-6 px-0 position-relative" style={{ alignSelf: "center" }}>
            <Image className="slide-img" src="image/home/home1.png" />
          </div>
          <div className="col-md-6 px-0">
            <Card style={{ lineHeight: "1.5" }}>
              <Card.Body>
                <Card.Title as="h1">เรารักษา "คนทั้งคน"</Card.Title>
                <Card.Text>
                  BPSC ดูแลผู้ป่วยด้วยใจ เพราะคนไข้ไม่ได้ป่วยแค่กาย
                </Card.Text>
                <br />
                <br />
                <Card.Text className="text-justify">
                  BPSC คือการดูแลแบบบูรณาการ
                  ที่มุ่งเน้นการสื่อสารเพื่อสร้างสัมพันธภาพอันดี
                  ระหว่างผู้ป่วยและบุคลากรทางการแพทย์ เพื่อให้ผู้ป่วยเปิดใจรับคำแนะนำ
                  และดำเนินการต่อยอด ไปสู่การประเมินผู้ป่วยแบบองค์รวม
                  ส่งเสริมการปรับพฤติกรรม (Motivational Interviewing, MI)
                  ที่ช่วยป้องกันการเกิดโรคไม่ติดต่อเรื้อรัง (Non-Communicable Disease,
                  NCD) และลดการกลับเป็นซ้ำ เพื่อสุขภาพที่ยั่งยืนของคนไทย
                </Card.Text>
                <div className="btn-home-img">
                  <Button variant="success" onClick={() => navigate("/about/")}>
                    <div>MORE</div>
                    <div>ABOUT BPCS</div>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactTitle;
