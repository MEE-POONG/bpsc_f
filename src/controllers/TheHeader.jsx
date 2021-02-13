import React, {useState, useEffect} from "react";
import {Navbar, Nav, Image, NavDropdown} from "react-bootstrap";
// import routes from '../routes'
import {NavLink, useNavigate} from "react-router-dom";
import Notification from "./TheNotification";
import TheLogin from "./TheLogin";
import {faUser, faBell, faPen, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  API_GET_USER_INFO,
  API_GET_USER_UPDATE,
  API_CHECK_NOTIFICATION,
  IMAGE_URL,
} from "../apis";
import moment from "moment";

const TheHeader = () => {
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [getNotification, setGetNotification] = useState(0);
  const [readHover, setReadHover] = useState(0);
  const handleHover = () => setReadHover((e) => (e += 1));
  useEffect(() => {
    API_GET_USER_INFO(localStorage.getItem("id")).then((result) => {
      setUserInfo(result?.data);
    });
  }, [localStorage.getItem("id"), readHover]);

  const checkNotification = () => {
    API_CHECK_NOTIFICATION().then((result) => {
      setGetNotification(result?.data?.notification);
    });
  };
  useEffect(() => {
    checkNotification();
  }, [moment().format("YYYY MM DD HH mm"), userInfo, readHover]);

  return (
    <>
      <Navbar
        variant="light"
        className="container-xl py-3"
        style={{boxShadow: "none"}}
        expand="lg"
        onMouseOver={handleHover}
      >
        {/* <Navbar bg="light" variant="light"> */}
        <Navbar.Brand href="/" >
          <Image
            alt="BPSC LOGO"
            src="/image/header/Logo.png"
            // width="100"
            // className="d-inline-block align-tops"
            style={{objectFit: "contain",height:"80px"}}
            
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center align-items-center text-nowrap">
            <NavLink to="/" className="nav-link">
              HOME
            </NavLink>
            <NavLink to="/about" className="nav-link">
              ABOUT US
            </NavLink>
            <NavLink to="/sharing" className="nav-link">
              SHARING
            </NavLink>
            <NavLink to="/e-leaning" className="nav-link">
              E-LEARNING
            </NavLink>
            <NavLink to="/gallery" className="nav-link">
              GALLERY
            </NavLink>
            <NavLink to="/doctor" className="nav-link">
              DOCTORS
            </NavLink>
            {sessionStorage.getItem("BPSC_USER_LOGIN") === "true" ? (
              <NavDropdown
                title={
                  <div className="row">
                    <div className="col-sm-2">
                      <div className="nav-item">
                        <a href={() => {}}>
                          {getNotification ? (
                            <span className="notify-badge">{getNotification}</span>
                          ) : null}
                          <img
                            src={
                              userInfo?.picture
                                ? IMAGE_URL + userInfo?.picture
                                : "https://chiccarrent.com/files/images/default-placeholder.png"
                            }
                            alt={userInfo?.firstName + " " + userInfo?.LastName}
                            width="50px"
                            height="50px"
                            style={{borderRadius: "50%"}}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                }
                id="collasible-nav-dropdown"
                className="dropdown-menu-login"
              >
                <NavDropdown.Header className="dropdown-title-username">
                  Username
                </NavDropdown.Header>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => navigate("profile")}>
                  <FontAwesomeIcon icon={faUser} /> &nbsp; โปรไฟล์ของฉัน
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {/* <FontAwesomeIcon icon={faBell} /> &nbsp;  */}
                  <Notification />
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("create-share")}>
                  <FontAwesomeIcon icon={faPen} /> &nbsp;สร้างแชร์
                </NavDropdown.Item>
                {/* <NavDropdown.Item>
                  <FontAwesomeIcon className="pr-2" icon={faEye} /> &nbsp;แชร์ที่เคยดู
                </NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    sessionStorage.clear();
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} /> &nbsp;ออกจากระบบ
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <TheLogin />
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default TheHeader;
