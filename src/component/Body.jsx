import React from "react";
import profileImage from "../assets/profile.jpg";
import "../css/body.css";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const Body = () => {
  return (
    <div className="body-container">
      <div className="body-content">
        <p className="p-cyan">Hi, my name is</p>
        <div className="container-title">
          <h1>
            Lawrence <span> Ike</span>
          </h1>
        </div>
        <div className="typewriter-text">
          <Typewriter
            words={[
              "Software Engineer.",
              "Full-Stack.",
              "Previous Sanlam|Allianz Insurance Intern",
              "Incoming Energia Limited intern",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>

        <p className="container-description">
          Finally got past "Hello World." I craft efficient, scalable, and
          user-friendly solutions to solve real-world problems and have a little
          fun while doing it...
        </p>

        <div className="contact-btn">
          <a
            href="https://wa.me/2348108966687"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:lawrence24@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <CgMail />
          </a>
          <a
            href="https://www.linkedin.com/in/kelechi-okoromike-567824297"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://github.com/Kelechi-Lawrence/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FaSquareGithub />
          </a>
        </div>
      </div>

      <img src={profileImage} className="profile-img" alt="profile" />
      <div className="topblur"></div>
      <div className="bottomblur"></div>
    </div>
  );
};

export default Body;
