import React, { Component } from "react";
import SharingDetail from "./SharingDetail";
import SharingTitle from "./SharingTitle";
class Sharing extends Component {
  render() {
    return (
      <div className="sharing-page text-uppercase">
        <SharingTitle/>
        <SharingDetail/>
      </div>
    );
  }
}

export default Sharing;
