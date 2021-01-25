import React from "react";
import { Container, InputGroup, Row, Col, Pagination, Image, Button, FormControl, Table } from "react-bootstrap";
import { faArrowRight, faChevronDown, faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LeaningList = () => {
    return (
        <Container className="leaning-list">
            <Row >
                <Col className="text-right" xs="12" lg="12">
                    <Button bsPrefix="btn-save" className="mb-5">BACK</Button>
                </Col>
                <Col className="text-center mb-5" xs="12" lg="12">
                    <iframe width="1080" height="720"
                        title="This is a unique title"
                        src="https://www.youtube-nocookie.com/embed/o4RnBsEmzFE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </Col>
                <Col xs="12" lg="12">
                    <h1>File NAme</h1>
                    <h3 className="contact">
                        <span className="mr-5">16 OCT 2020</span>
                        <span className="mr-2"><FontAwesomeIcon icon={faHeart} /></span>
                        <span className="mr-5">135</span>
                        <span className="mr-2"><FontAwesomeIcon icon={faComment} /></span>
                        <span className="mr-2">30</span>
                    </h3>
                </Col>
                <Col xs="12" lg="12" className="mt-5">
                    <span className="tag mx-5">แท็คที่เกี่ยวข้อง</span>
                </Col>
                <Col xs="12" lg="12" className="mt-5 tag-list">
                    <span className="tag ml-5 mr-3">การสื่อสาร</span>
                    <span className="tag mx-3">การปฏิบัติ</span>
                    <span className="tag mx-3">ผู้ร่วมสร้างสรรค์นวัตกรรม</span>
                </Col>
                <Col xs="12" lg="12" className="mt-5">
                    <span className="tag mx-5">แท็คที่เกี่ยวข้อง</span>
                </Col>
                <Col xs="12" lg="12" className="mt-5 comment align-items-center">
                    <span className="ml-5">
                        <Image src="../image/image12.png" bsPrefix="img-comment" />
                    </span>
                    <span className="ml-5">
                        <FormControl bsPrefix="input-comment" as="textarea" placeholder="Add a Public Comment..." />
                    </span>
                </Col>

            </Row>{" "}
            <Container fluid className="box-list mb-5">
                <Row className="py-5 mx-5">
                    <Col xl="12" lg="12" md="12" xs="12" className="list align-items-center">
                        <span className="img">
                            <Image src="../image/image12.png" />
                        </span>
                        <span className="detail">
                            <p className="date">21 OCT 2019</p>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempororem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la incididunt ut labore ...
                            </p>
                        </span>
                    </Col>
                    <Col xl="12" lg="12" md="12" xs="12" className="list align-items-center">
                        <span className="img">
                            <Image src="../image/image12.png" />
                        </span>
                        <span className="detail">
                            <p className="date">21 OCT 2019</p>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempororem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la incididunt ut labore ...
                            </p>
                        </span>
                    </Col>
                    <Col xl="12" lg="12" md="12" xs="12" className="list align-items-center">
                        <span className="img">
                            <Image src="../image/image12.png" />
                        </span>
                        <span className="detail">
                            <p className="date">21 OCT 2019</p>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempororem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la incididunt ut labore ...
                            </p>
                        </span>
                    </Col>
                </Row>
                <Button bsPrefix="btn-show-list" ><FontAwesomeIcon icon={faChevronDown} /></Button>
            </Container>
            <Container className="sheet p-5 mb-5">
                <Table responsive="sm">
                    <thead style={{ background: "#26beb4" }}>
                        <tr>
                            <th><h1>เอกสารที่เกี่ยวข้อง</h1></th>
                            <th className="text-center"><h1>Size</h1></th>
                            <th className="text-center"><h1>Download</h1></th>
                        </tr>
                    </thead>
                    <tbody className="file">
                        <tr>
                            <td className="text-start"><Image src="../image/pdf.png" />
                                <span className="ml-5">Lorem ipsum dolor sit amet, consectetur</span>
                            </td>
                            <td className="text-center">404.80 kb</td>
                            <td className="text-center">
                                <Button bsPrefix="download mb3">Download</Button>
                                <Button bsPrefix="preview">Preview</Button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-start"><Image src="../image/pdf.png" />
                                <span className="ml-5">Lorem ipsum dolor sit amet, consectetur</span>
                            </td>
                            <td className="text-center">404.80 kb</td>
                            <td className="text-center">
                                <Button bsPrefix="download mb3">Download</Button>
                                <Button bsPrefix="preview">Preview</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </Container>
    );
};

export default LeaningList;
