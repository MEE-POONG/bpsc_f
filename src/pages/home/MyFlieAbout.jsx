import React, { Component } from "react";
import { Container, Image, Button } from 'react-bootstrap';
import SheetOne from './sheet/SheetOne'
import SheetTwo from './sheet/SheetTwo'
import SheetThree from './sheet/SheetThree'
class MyFlieAbout extends Component {
  render() {
    return (
      <Container fluid className="home-file-about">
        <Image className="file-about" src="/image/fileabout.svg" />
        <Container fluid className="my-file while">
          <div className="tab-script">
            <Button variant="light">our Innovation</Button>
          </div>
          <SheetOne />
          <SheetTwo />
          <SheetThree />
        </Container>
        <Container fluid className="my-file green">
          <div className="tab-script">
            <Button variant="light">our Mission</Button>
          </div>
          <SheetOne />
          <SheetTwo />
          <SheetThree />
        </Container>
      </Container>
    );
  }
};
export default MyFlieAbout;