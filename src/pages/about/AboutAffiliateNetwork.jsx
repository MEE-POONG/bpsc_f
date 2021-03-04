import React, {useState, useEffect} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {API_GET_HOSPITAL} from "../../apis";

const AboutTitle = () => {
  const [data, setData] = useState({
    hospital: 0,
    prototype: 0,
    happy: 0,
    better: 0,
  });

  useEffect(() => {
    API_GET_HOSPITAL().then((result) => {
      setData(result?.data);
    });
  }, []);

  return (
    <div className="about-title">
      <div className="scroll-num py-5 about-title-bg">
        <Container className="text-center">
          <p className="h1 font-weight-bold f-gradient">เครือข่ายพันธมิตร</p>
          <Card.Body className="text-center" style={{background: "unset"}}>
            <Row xs={12}>
              <Col xs={6} className="p-5">
                <div className="p-5 about-background-radial-gradient">
                  <h1
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    โรงพยาบาลต้นแบบ
                  </h1>
                  <h1>{data.hospital}+</h1>
                </div>
              </Col>
              <Col xs={6} className="p-5">
                <div className="p-5 about-background-radial-gradient">
                  <h1
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    โรงพยาบาล BPSC
                  </h1>
                  <h1>{data.prototype}+</h1>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </div>
    </div>
  );
};
export default AboutTitle;
