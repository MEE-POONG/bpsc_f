import React, { Component } from "react";
import AboutTitle from "./AboutTitle";
import AboutSubTitle from "./AboutSubTitle";

class About extends Component {
  render() {
    return (
      <div className="about text-uppercase">
        <AboutTitle />
        <AboutSubTitle />
      </div>
    );
  }
}

export default About;
