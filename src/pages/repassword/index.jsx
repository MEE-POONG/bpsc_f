import React, {useState} from "react";
import {Card, Container} from "react-bootstrap";
import queryString from "query-string";
import {useLocation} from "react-router-dom";
import {API_CHANGE_FORGET_PASSWORD} from "../../apis/index";
import {useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";
import Swal from "sweetalert2";

const RePassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {token} = queryString.parse(location.search);

  const [changePasswordForm, setChangePasswordForm] = useState({
    password1: "",
    password2: "",
  });

  const handleReset = (e) => {
    e.preventDefault();
    API_CHANGE_FORGET_PASSWORD(changePasswordForm, token)
      .then((e) => {
        Swal.fire("สำเร็จ!", "ตั้งค่ารหัสผ่านสำเร็จ!", "success").then(() =>
          navigate("/")
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
    <div className="change-password-page text-uppercase">
      <Container className="py-5" style={{textAlign: "-webkit-center"}}>
        <Card style={{maxWidth: "500px"}}>
          <Card.Body className="py-5">
            <Form style={{textAlign: "-webkit-left"}}>
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
                  onChange={(e) =>
                    setChangePasswordForm({
                      ...changePasswordForm,
                      password1: e.target.value,
                    })
                  }
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
                  onChange={(e) =>
                    setChangePasswordForm({
                      ...changePasswordForm,
                      password2: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <button
                className="btn btn-lg btn-success btn-block text-uppercase mb-3"
                onClick={(e) => handleReset(e)}
              >
                <h4 className="m-0">RESET</h4>
              </button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default RePassword;
