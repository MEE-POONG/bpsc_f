
import React from "react";
import { Container, Form } from "react-bootstrap";
const CreateTag = () => {
  return (
    <div className="tag">
      <Container>
        <div >
          <h1>ติด Tag ให้แชร์</h1>
        </div>
      </Container>
      <Container className="input-tag">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>รายละเอียดย่อของแชร์  (0/300)</Form.Label>
            <Form.Control type="text" as="textarea" />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default CreateTag;
