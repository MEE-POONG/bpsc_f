import React from "react";
import {Container} from "react-bootstrap";

const AboutTalkWithUS = () => {
  return (
    <div className="about-talk-with-us about-talk-with-us-bg">
      <div className="scroll-num p-5 about-talk-with-us-bg">
        <Container className="text-left">
          <div className="pt-5">
            <p className="display-4 font-weight-bold">Talk with us</p>
          </div>
          <div className="pt-5">
            <input
              type="text"
              className="form-control about-talk-with-us-input"
              placeholder="YOUR NAME"
              aria-label="YOUR NAME"
              aria-describedby="basic-addon1"
            />
            <div className="pt-5">
              <input
                type="text"
                className="form-control about-talk-with-us-input"
                placeholder="YOUR E-MAIL"
                aria-label="YOUR E-MAIL"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="pt-5">
              <textarea
                className="form-control about-talk-with-us-input"
                placeholder="MASSAGE"
                rows="10"
              ></textarea>
            </div>
            <div className="pt-5 about-talk-with-us-btn-right">
              <button
                type="button"
                className="btn btn-danger about-talk-with-us-btn-danger "
              >
                Danger
              </button>
              <button
                type="button"
                className="btn btn-success about-talk-with-us-btn-success"
              >
                Success
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default AboutTalkWithUS;
