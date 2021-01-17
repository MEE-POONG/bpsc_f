
import React from "react";
import { Container, Card, InputGroup, FormControl, Row, Col } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SharingSubTitle = () => {
    return (
        <Container className="title">
            <Row>
                <Col lg="8">
                    <Card>
                        <Card.Body>
                            <Card.Title>Hope Sharing</Card.Title>
                            <Card.Subtitle>แบ่งปันประสบการณ์</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4" className="align-self-center">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text variant="outline-secondary" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl onFocus={true} onBlur={false} placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default SharingSubTitle;
