import React,{Component} from "react";
import SlideTitle from './SlideTitle';
import MyFlieAbout from './MyFlieAbout';
import Abstain from "./Abstain";
import Learning from "./Learning";
import TeamMember from "./TeamMember";
import EventBox from "./EventBox";

class Home extends Component {
  render() {
  return (
    <div className="home">
      <SlideTitle/>
      <MyFlieAbout/>
      <Abstain/>
      <Learning/>
      <TeamMember/>
      <EventBox/>
    </div>
  );
}
};

export default Home;
