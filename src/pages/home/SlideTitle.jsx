import React, { Component } from "react";
import { Container, Card, Button, Image } from 'react-bootstrap';
class SlideTitle extends Component {
  render() {
    return (
      <div style={{ lineHeight: '0' }}>

        <iframe height="520" className="title-video" src="https://www.youtube.com/embed/U1WaiKNFfiM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Container
          className="home-image text-uppercase p-5"
        >
          <Image className="slide-img" src="image/home/home1.png" />
          <Card style={{ lineHeight: '1.5', float: 'right' }}>
            <Card.Body>
              <Card.Title as="h1">ระบบสาธารณะสุขที่เราวาดฝัน</Card.Title>
              <Card.Text style={{ color: "#000" }}>
                เป็นระบบสาธารณะสุขที่ทั้งบุคลากรและผู้รับบริการ
                ได้ช่วยรักษากันและกัน
                มากกว่าเพียงแค่การจ่ายยา...
            </Card.Text>
              <div>
                <Button variant="success">MODE ABOUT US BPSC</Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
};

export default SlideTitle;
