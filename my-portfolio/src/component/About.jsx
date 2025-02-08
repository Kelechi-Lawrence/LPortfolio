import React from "react";
import "./about.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services">
      <div id="about" className="awesome">
        <span className="aboutMe" data-aos="fade-up">
          Get to Know
        </span>
        <span className="aboutMe" data-aos="fade-up">
          Me
        </span>
        <span data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Quod voluptatum dignissimos veniam consectetur, quisquam reiciendis
          est corporis quae dolor nisi sunt,
          <br /> maxime velit praesentium sint expedita explicabo vero ducimus
          atque!
        </span>
        <button className=" Sbutton">Download CV</button>
      </div>
    </div>
  );
};

export default About;
