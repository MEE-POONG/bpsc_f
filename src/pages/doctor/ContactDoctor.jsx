import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {IMAGE_URL} from "../../apis";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import {useParams} from "react-router-dom";

const ContactDoctor = () => {
  const [doctorContact, setDoctorContact] = useState({
    subject: "",
    content: "",
    contactBack: "",
  });
  const navigate = useNavigate();
  const {id} = useParams();

  const handleClick = () => {
    if (!localStorage.getItem("refresh-token")) {
      return Swal.fire({
        icon: "error",
        title: "ไม่ได้เข้าสู่ระบบ",
        text: "กรุณาเข้าสู่ระบบ",
      });
    }
    var data = JSON.stringify({
      token: localStorage.getItem("refresh-token"),
    });

    var config = {
      method: "post",
      url: "https://api.thaibpsc.com/refresh-token",
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("refresh-token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("refresh-token", response.data.refreshToken);

        var data = JSON.stringify(doctorContact);

        var config = {
          method: "post",
          url: "https://api.thaibpsc.com/doctorContact/" + id,
          headers: {
            Authorization: "Bearer " + response.data.accessToken,
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            setDoctorContact({
              subject: "",
              content: "",
              contactBack: "",
            });
            return Swal.fire({
              icon: "success",
              title: "สำเร็จ",
              text: "ส่งข้อความสำเร็จ",
            }).then(() => {
              navigate(-1)
            });
          })
          .catch(function (error) {
            return Swal.fire({
              icon: "error",
              title: error?.error,
              text: error?.message,
            });
          });
      })
      .catch(function (error) {
        return Swal.fire({
          icon: "error",
          title: "ไม่ได้เข้าสู่ระบบ",
          text: "กรุณาเข้าสู่ระบบ",
        });
      });
  };

  return (
    <div className="about-talk-with-us about-talk-with-us-bg">
      <div className="scroll-num p-5 about-talk-with-us-bg">
        <Container className="text-left">
          <div className="pt-5">
            <p className="display-4 font-weight-bold">Contact Doctor</p>
          </div>
          <div className="pt-5 input-group-lg">
            <input
              type="text"
              className="form-control about-talk-with-us-input"
              placeholder="YOUR NAME"
              onChange={(e) => setDoctorContact({...doctorContact, subject: e.target.value})}
              value={doctorContact.subject}
            />
            <div className="pt-5 input-group-lg input-group-lg">
              <input
                type="text"
                className="form-control about-talk-with-us-input"
                placeholder="YOUR E-MAIL"
                onChange={(e) =>
                  setDoctorContact({...doctorContact, contactBack: e.target.value})
                }
                value={doctorContact.contactBack}
              />
            </div>
            <div className="pt-5">
              <textarea
                className="form-control about-talk-with-us-input"
                placeholder="MASSAGE"
                rows="10"
                onChange={(e) => setDoctorContact({...doctorContact, content: e.target.value})}
                value={doctorContact.content}
              ></textarea>
            </div>
            <div className="pt-5 about-talk-with-us-btn-right">
              <button
                type="button"
                className="btn btn-danger about-talk-with-us-btn-danger "
                onClick={(e) =>
                  setDoctorContact({
                    subject: "",
                    content: "",
                    contactBack: "",
                  })
                }
              >
                RESET
              </button>
              <button
                type="button"
                className="btn btn-success about-talk-with-us-btn-success"
                onClick={() => handleClick()}
              >
                SEND
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default ContactDoctor;
