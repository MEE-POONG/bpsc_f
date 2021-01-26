import React from "react";
import { Container, InputGroup, Row, Col, Media, Image, Button, FormControl, Table } from "react-bootstrap";
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
                    <iframe
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
                    <span className="tag">แท็คที่เกี่ยวข้อง</span>
                </Col>
                <Col xs="12" lg="12" className="mt-5 tag-list">
                    <div className="tag mr-5">
                        <p >การสื่อสาร</p>
                        <p >การสื่อสาร</p>
                        <p >การปฏิบัติ</p>
                        <p >ผู้ร่วมสร้างสรรค์นวัตกรรม</p>
                        <p >การสื่อสาร</p>
                        <p >การสื่อสาร</p>
                        <p >การปฏิบัติ</p>
                        <p >ผู้ร่วมสร้างสรรค์นวัตกรรม</p>
                        <p >การสื่อสาร</p>
                        <p >การสื่อสาร</p>
                        <p >การปฏิบัติ</p>
                        <p >ผู้ร่วมสร้างสรรค์นวัตกรรม</p>
                        <p >การสื่อสาร</p>
                        <p >การสื่อสาร</p>
                        <p >การปฏิบัติ</p>
                        <p >ผู้ร่วมสร้างสรรค์นวัตกรรม</p>
                        <p >การสื่อสาร</p>
                        <p >การสื่อสาร</p>
                        <p >การปฏิบัติ</p>
                        <p >ผู้ร่วมสร้างสรรค์นวัตกรรม</p>
                        <p >การสื่อสาร</p>
                        <p >การสื่อสาร</p>
                        <p >การปฏิบัติ</p>
                        <p >ผู้ร่วมสร้างสรรค์นวัตกรรม</p>
                    </div>

                </Col>
                <Col xs="12" lg="12" className="mt-5 comment align-items-center">
                    <Media>
                        <img
                            width={64}
                            height={64}
                            className="align-self-start mr-3"
                            src="../image/image12.png"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <FormControl bsPrefix="input-comment" as="textarea" placeholder="Add a Public Comment..." />
                        </Media.Body>
                    </Media>
                </Col>

            </Row>{" "}
            <Container fluid className="list mb-5 py-5">
                <Media >
                    <Image src="../image/image12.png" />
                    <Media.Body className="detail">
                        <p className="date">21 OCT 2019</p>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la incididunt ut labore ...
                                </p>
                    </Media.Body>
                </Media>
                <Media >
                    <Image src="../image/image12.png" />
                    <Media.Body className="detail">
                        <p className="date">21 OCT 2019</p>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la incididunt ut labore ...
                                </p>
                    </Media.Body>
                </Media>
                <Media >
                    <Image src="../image/image12.png" />
                    <Media.Body className="detail">
                        <p className="date">21 OCT 2019</p>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la incididunt ut labore ...
                                </p>
                    </Media.Body>
                </Media>
                <Button bsPrefix="btn-show-list" ><FontAwesomeIcon icon={faChevronDown} /></Button>
            </Container>
            <Container className="sheet p-lg-5 p-md-5 mb-5">
                <Table responsive="sm">
                    <tr style={{ background: "#26beb4" }}>
                        <th className="head-th text-left">เอกสารที่เกี่ยวข้อง</th>
                        <th className="head-th ">Size</th>
                        <th className="head-th">Download</th>
                    </tr>
                    <tbody className="file">
                        <tr>
                            <td className="text-start">
                                <Media >
                                    <Image src="../image/pdf.png" />
                                    <Media.Body>
                                        Lorem ipsum dolor sit amet, consectetur
                                    </Media.Body>
                                </Media>
                            </td>
                            <td className="text-center">404.80 kb</td>
                            <td className="text-center">
                                <Button bsPrefix="download mb3">Download</Button>
                                <Button bsPrefix="preview">Preview</Button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-start">
                                <Media >
                                    <Image src="../image/pdf.png" />
                                    <Media.Body>
                                        Lorem ipsum dolor sit amet, consectetur
                                    </Media.Body>
                                </Media>
                            </td>
                            <td className="text-center">404.80 kb</td>
                            <td className="text-center">
                                <Button bsPrefix="download mb3">Download</Button>
                                <Button bsPrefix="preview">Preview</Button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-start">
                                <Media >
                                    <Image src="../image/pdf.png" />
                                    <Media.Body>
                                        Lorem ipsum dolor sit amet, consectetur
                                    </Media.Body>
                                </Media>
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
