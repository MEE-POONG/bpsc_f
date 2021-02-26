import React, { useState, useEffect } from "react";
import { Navbar, Nav, Image, NavDropdown, ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";
// import routes from '../routes'
import { NavLink, useNavigate } from "react-router-dom";
import Notification from "./TheNotification";
import TheLogin from "./TheLogin";
import { faUser, faBell, faPen, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  API_GET_USER_INFO,
  API_GET_USER_UPDATE,
  API_CHECK_NOTIFICATION,
  IMAGE_URL,
} from "../apis";
import moment from "moment";

const TheHeader = () => {
  // const [ dropShow, setDropShow] = useState(false);
  // const showDropdown = (e) => {
  //   setDropShow(!dropShow);
  // }
  // const hideDropdown = e => {
  //   setDropShow(false);
  // }
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [getNotification, setGetNotification] = useState(0);
  const [readHover, setReadHover] = useState(0);
  // const handleHover = () => setReadHover((e) => (e += 1));
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
        style={{ boxShadow: "none" }}
        expand="lg"
      // onMouseOver={handleHover}
      >
        {/* <Navbar bg="light" variant="light"> */}
        <Navbar.Brand href="/">
          <Image
            alt="BPSC LOGO"
            src="/image/header/Logo.png"
            // width="100"
            // className="d-inline-block align-tops"
            style={{ objectFit: "contain", height: "30px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center align-items-center text-nowrap">
            <NavLink to="/" className="nav-link dropdown-hover">
              HOME
            </NavLink>
            {/* <NavLink to="/sharing" className="nav-link dropdown-hover">
              SHARING
            </NavLink> */}
            <NavLink to="/sharing" className="nav-link dropdown-hover">
              SHARING
                <div class="dropdown-content">
                <a className="dropdown-item">คําแนะนําแบบสั้น ( BA )</a>
                <a className="dropdown-item">ประเมินแบบสั้น ( BI )</a>
                <a className="dropdown-item">ฝึกสติแบบสั้น ( MBBI )</a>
                <a className="dropdown-item">สติบําบัด ( MBTC )</a>
              </div>
            </NavLink>
            <NavLink to="/e-leaning" className="nav-link dropdown-hover">
              E-LEARNING
              <div class="dropdown-content">
                <a href="#action/3.1" className="dropdown-item">BPST TALK</a>
                <a href="#action/3.2" className="dropdown-item">สร้าง รพ BPST</a>
                <a href="#action/3.3" className="dropdown-item">E-LEARNING</a>
                <a href="#action/3.4" className="dropdown-item">Event</a>
              </div>
            </NavLink>


            <NavLink to="/gallery" className="nav-link">
              GALLERY
            </NavLink>
            <NavLink to="/doctor" className="nav-link">
              DOCTORS
            </NavLink>
            <NavLink to="/about" className="nav-link dropdown-hover">
              ABOUT US
              <div class="dropdown-content" title="COURSE">
                <a href="#action/3.1" className="dropdown-item">ประวัติโครางการ</a>
                <a href="#action/3.2" className="dropdown-item">เครือข่ายพันธมิตร</a>
                <a href="#action/3.3" className="dropdown-item">การสนับสนุน</a>
              </div>
            </NavLink>

            {localStorage.getItem("BPSC_USER_LOGIN") === "true" ? (
              <NavDropdown
                title={
                  <div className="row">
                    <div className="col-sm-2">
                      <div className="nav-item">
                        <a href={() => { }}>
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
                            style={{ borderRadius: "50%" }}
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
                  {userInfo?.firstName}
                </NavDropdown.Header>
                <NavDropdown.Divider />
                <a onClick={() => navigate("profile")}>
                  <FontAwesomeIcon icon={faUser} /> &nbsp; โปรไฟล์ของฉัน
                </a>
                <a>
                  {/* <FontAwesomeIcon icon={faBell} /> &nbsp;  */}
                  <Notification />
                </a>
                <a onClick={() => navigate("create-share")}>
                  <FontAwesomeIcon icon={faPen} /> &nbsp;สร้างแชร์
                </a>
                {+localStorage.getItem("isAdmin") === 1 && (
                  <a onClick={() => navigate("create-gallery")}>
                    <FontAwesomeIcon icon={faPen} /> &nbsp;สร้างแกลเลอรี่
                  </a>
                )}
                {+localStorage.getItem("isAdmin") === 1 && (
                  <a onClick={() => navigate("create-leaning")}>
                    <FontAwesomeIcon icon={faPen} /> &nbsp;สร้างบทเรียน
                  </a>
                )}
                {+localStorage.getItem("isAdmin") === 1 && (
                  <a onClick={() => navigate("create-event")}>
                    <FontAwesomeIcon icon={faPen} /> &nbsp;สร้างกิจกกรรม
                  </a>
                )}
                {+localStorage.getItem("isAdmin") === 1 && (
                  <a onClick={() => navigate("create-tag")}>
                    <FontAwesomeIcon icon={faPen} /> &nbsp;สร้างแท็ก
                  </a>
                )}
                {+localStorage.getItem("isAdmin") === 1 && (
                  <NavDropdown.Item onClick={() => navigate("create-doctor")}>
                    <FontAwesomeIcon icon={faPen} /> &nbsp;เพิ่ม Doctor
                  </NavDropdown.Item>
                )}
                {/* <NavDropdown.Item>
                  <FontAwesomeIcon className="pr-2" icon={faEye} /> &nbsp;แชร์ที่เคยดู
                </a> */}
                <NavDropdown.Divider />
                <a
                  onClick={() => {
                    localStorage.clear();
                    localStorage.clear();
                    navigate(0);
                  }}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} /> &nbsp;ออกจากระบบ
                </a>
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
