import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {API_REGISTER, API_GET_POLICY} from "../apis";
import Swal from "sweetalert2";

const TheRegister = () => {
  const navigate = useNavigate();
  const setClick = () => API_GET_POLICY();

  const [singUpForm, setSingUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    API_REGISTER(singUpForm)
      .then((e) => {
        Swal.fire("สำเร็จ!", "สมัครสมาชิกสำเร็จ!", "success").then(() =>
          window.location.reload()
        );
      })
      .catch((error) => {
        const errorMSG = error?.response?.data;
        Swal.fire({
          icon: "error",
          title: errorMSG?.error,
          text: errorMSG?.message,
        });
      });
  };
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>
            <h4>
              ชื่อ<span style={{color: "red"}}>*</span>
            </h4>
          </Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="ชื่อ"
            onChange={(e) => setSingUpForm({...singUpForm, firstName: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>
            <h4>
              นามสกุล<span style={{color: "red"}}>*</span>
            </h4>
          </Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="นามสกุล"
            onChange={(e) => setSingUpForm({...singUpForm, lastName: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <h4>
              อีเมล<span style={{color: "red"}}>*</span>
            </h4>
          </Form.Label>
          <Form.Control
            size="lg"
            type="email"
            placeholder="อีเมล"
            onChange={(e) => setSingUpForm({...singUpForm, email: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <h4>
              รหัสผ่าน<span style={{color: "red"}}>*</span>
            </h4>
          </Form.Label>
          <Form.Control
            size="lg"
            type="password"
            placeholder="รหัสผ่าน"
            onChange={(e) => setSingUpForm({...singUpForm, password1: e.target.value})}
          />
        </Form.Group>
        <Form.Group controlId="formBasicRePassword">
          <Form.Label>
            <h4>ยืนยันรหัสผ่าน</h4>
          </Form.Label>
          <Form.Control
            size="lg"
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            onChange={(e) => setSingUpForm({...singUpForm, password2: e.target.value})}
          />
        </Form.Group>

        <div className="px-3 pb-3">
          By Clicking Sign Up, you agree to our Terms and that you have read our{" "}
          <a href={API_GET_POLICY} onClick={setClick} target="_blank" download>
            Data Use Policy
          </a>
          , including our Cookie Use
        </div>
        <button
          className="btn btn-lg btn-primary btn-block text-uppercase mb-3"
          onClick={(e) => handleRegister(e)}
        >
          <h4 className="m-0">ยืนยัน</h4>
        </button>
      </Form>
      <hr className="my-4" />
    </>
  );
};
export default TheRegister;
