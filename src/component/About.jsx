import React from "react";
import "../css/about.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import JobList from "./JobList";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services">
      <div id="about" className="awesome">
        <span className="aboutMe" data-aos="fade-up">
          Get to <span className="skyblue">Know</span>
        </span>
        <span className="aboutMe " data-aos="fade-up ">
          Me
        </span>
        <span data-aos="zoom-in-up">
          Raised in Nigeria, my engineering journey has been driven by a passion
          for developing meaningful solutions,
          <br /> including mobile applications, web platforms, and AI tools that
          create impact.
        </span>
        <a href="/Kelechi-Resume.pdf" download className="Sbutton">
          Resume
        </a>
      </div>
      <JobList />
    </div>
  );
};

export default About;
