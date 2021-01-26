import React from "react";
import {Container, Card, Row, Col} from "react-bootstrap";
const GalleryTitle = () => {
  return (
    <Container className="title mb-5">
      <Row>
        <Col lg="12">
          <Card.Title>Gallery Blog</Card.Title>
          <Card.Text>
            “ร้อยภาพ ล้านความหมาย”<br></br><br></br>
            การเดินทางของ BPSC จากหัวใจดวงเล็กๆ ที่อยากดูแลผู้ป่วย จนขยายเป็นโครงการ ที่ร้อยรัดทุกหัวใจไว้ด้วยกัน ผ่านการสื่อสารอย่างเข้าใจ
          </Card.Text>
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryTitle;
