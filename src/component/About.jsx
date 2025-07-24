import React from "react";
import "../css/about.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import JobList from "./JobList";
import profileImage from "../assets/profile.jpg";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services">
      <div id="about" className="awesome">
        <span className="aboutMe" data-aos="fade-right">
          About <span className="skyblue">Me </span>{" "}
        </span>

        <div className="card">
          <img src={profileImage} className="profile-img" alt="profile" />

          <span data-aos="fade-left" className="description">
            Raised in Nigeria, my engineering journey has been driven by a
            passion for developing meaningful solutions, including mobile
            applications, web platforms, and AI tools that create impact.
            <a href="/Kelechi-Resume.pdf" download className="Sbutton">
              Resume
            </a>
          </span>
        </div>
      </div>
      <JobList />
    </div>
  );
};

export default About;
