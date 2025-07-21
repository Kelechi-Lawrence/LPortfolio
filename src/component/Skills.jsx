import React from "react";
import skillImage from "../assets/skillimg.png";
import "../css/skills.css";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { SiJquery } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import nodeImage from "../assets/node.png";
import powerBiImage from "../assets/powerbi.png";
import figmaImage from "../assets/figma.png";

import { BiLogoPostgresql } from "react-icons/bi";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="skills-container">
      <span className=" emoji">
        <img
          id="experience"
          className="skillsImage"
          src={skillImage}
          alt="skills"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        />
      </span>
      <h1 data-aos="fade-up">
        My <span className="skyblue">skills</span>
      </h1>
      <div className="skills">
        <div className="html" data-aos="fade-up">
          <TiHtml5 />
        </div>
        <div className="css" data-aos="fade-up">
          <FaCss3Alt />
        </div>
        <div className="js" data-aos="fade-up">
          <TbBrandJavascript />
        </div>
        <div className="jq" data-aos="fade-up">
          <SiJquery />
        </div>
        <div className="bs" data-aos="fade-up">
          <RiTailwindCssFill />
        </div>
        <div className="react" data-aos="fade-up">
          <IoLogoReact />
        </div>
        <div className="ts" data-aos="fade-up">
          <SiTypescript />
        </div>
        <div className="next" data-aos="fade-up">
          <SiNextdotjs />
        </div>
        <div className="sql" data-aos="fade-up">
          <BiLogoPostgresql />
        </div>
        <div className="java" data-aos="fade-up">
          <FaJava />
        </div>

        <div className="git" data-aos="fade-up">
          <FaGitAlt />
        </div>
        <div className="github" data-aos="fade-up">
          <FaGithubSquare />
        </div>
        <div className="power" data-aos="fade-up">
          <img src={powerBiImage} alt="powerbi" />
        </div>
        <div className="figma" data-aos="fade-up">
          <img src={figmaImage} alt="figma" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
