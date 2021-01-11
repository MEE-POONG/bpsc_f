import React,{Component} from "react";
import SlideTitle from './SlideTitle';
import MyFlieAbout from './MyFlieAbout';
import Abstain from "./Abstain";

class Home extends Component {
  render() {
  return (
    <div className="home">
      <SlideTitle/>
      <MyFlieAbout/>
      <Abstain/>
    </div>
  );
}
};

export default Home;
