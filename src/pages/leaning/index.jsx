import React, {Component} from "react";
import LeaningDetail from "./LeaningDetail";
import LeaningTitle from "./LeaningTitle";
class Leaning extends Component {
  render() {
    return (
      <div className="leaning-page text-uppercase">
        {/* <LeaningTitle /> */}
        <LeaningDetail />
      </div>
    );
  }
}

export default Leaning;
