import React, {Component} from "react";
import {Container, Card, Button, Image} from "react-bootstrap";
class SlideTitle extends Component {
  render() {
    return (
      <div style={{lineHeight: "0"}}>
        <div className="title-video">
          <iframe
            title="This is a unique title"
            src="https://www.youtube-nocookie.com/embed/gJBQWXcTg2U"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Container className="home-image text-uppercase py-5">
          <div className="row" style={{ alignContent : "center" }}>
            <div className="col-md-6 px-0" style={{ alignSelf : "center" }}>
              <Image className="slide-img" src="image/home/home1.png" />
            </div>
            <div className="col-md-6 px-0">
              <Card style={{lineHeight: "1.5"}}>
                <Card.Body>
                  <Card.Title as="h1">เพราะเราต้องรักษาคนทั้งคน</Card.Title>
                  <Card.Text>
                    BPSC ดูแลผู้ป่วยด้วยหัวใจ เพราะคนไข้ไม่ได้ป่วยแค่กาย<br></br><br></br>
                    BPSC คือการดูแลแบบบูรณาการ ที่มุ่งเน้นการสื่อสารเพื่อสร้างสัมพันธภาพอันดี ระหว่างผู้ป่วยและบุคลากรทางการแพทย์ เพื่อให้ผู้ป่วยเปิดใจรับคำแนะนำ และดำเนินการต่อยอด ไปสู่การประเมินผู้ป่วยแบบองค์รวม ส่งเสริมการปรับพฤติกรรม (Motivational Interviewing, MI) ที่ช่วยป้องกันการเกิดโรคไม่ติดต่อเรื้อรัง (Non-Communicable Disease, NCD) และลดการกลับเป็นซ้ำ เพื่อสุขภาพที่ยั่งยืนของคนไทย
                  </Card.Text>
                  <div className="btn-home-img">
                    <Button variant="success">MODE ABOUT US BPSC</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default SlideTitle;
