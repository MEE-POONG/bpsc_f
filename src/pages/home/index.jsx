import React, {Component} from "react";
import SlideTitle from "./SlideTitle";
import SheetOne from "./SheetOne";
import SheetTwo from "./SheetTwo";
import Abstain from "./Abstain";
import TeamMember from "./TeamMember";
import EventBox from "./EventBox";
import Frequently from "./Frequently";
import ScrollNum from "./ScrollNum";
import ContactTitle from "./ContactTitle";

class Home extends Component {
  render() {
    return (
      <div className="home text-uppercase">
        <SlideTitle />
        <ScrollNum />
        <ContactTitle />
        <SheetOne />
        <SheetTwo />
        <Abstain />
        <TeamMember />
        <EventBox />
        <Frequently />
      </div>
    );
  }
}

export default Home;
