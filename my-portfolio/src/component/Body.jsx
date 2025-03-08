import React from "react";
import profileImage from "../assets/profile.jpg";
import "../css/body.css";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
const Body = () => {
  return (
    <div className="body-container">
      <div className="body-content">
        <div className="container-title">
          <h1> Hi i'm Lawrence</h1>
        </div>
        <p className="container-description">
          Creative and passionate Software Engineer experienced in developing
          scalable full stack applications,i enjoy tackling challenges, writing
          clean code, and bringing impactful ideas to life .
        </p>
        <a href="" className="contact-btn">
          <FaWhatsapp />
          <CgMail />
          <IoLogoLinkedin />
          <FaSquareGithub />
        </a>
      </div>
      <img src={profileImage} className=" profile-img" alt="profile" />
      <div className="topblur"></div>
      <div className="bottomblur"></div>
    </div>
  );
};

export default Body;
