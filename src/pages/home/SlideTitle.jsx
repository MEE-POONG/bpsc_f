import React, { Component } from "react";
import { Container, Card, Button, Image } from "react-bootstrap";
class SlideTitle extends Component {
  render() {
    return (
      <div style={{ lineHeight: "0" }}>
        <div className="title-video">
          <iframe
            title="This is a unique title"
            src="https://www.youtube-nocookie.com/embed/o4RnBsEmzFE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Container className="home-image text-uppercase py-5">
          <div className="row">
            <div className="col-md-6 px-0">
              <Image className="slide-img" src="image/home/home1.png" />
            </div>
            <div className="col-md-6 px-0">
              <Card style={{ lineHeight: "1.5" }}>
                <Card.Body>
                  <Card.Title as="h1">ระบบสาธารณะสุขที่เราวาดฝัน</Card.Title>
                  <Card.Text>
                    เป็นระบบสาธารณะสุขที่ทั้งบุคลากรและผู้รับบริการ
                    ได้ช่วยรักษากันและกัน มากกว่าเพียงแค่การจ่ายยา...
                  </Card.Text>
                  <div>
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
