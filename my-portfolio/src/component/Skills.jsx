import React from "react";
import skillImage from "../assets/skillimg.png";
import "../css/skills.css";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { SiJquery } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import nodeImage from "../assets/node.png";
import powerBiImage from "../assets/powerbi.png";
import figmaImage from "../assets/figma.png";
import sqlImage from "../assets/sql.png";
import mongoImage from "../assets/mongo.png";
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
        />
      </span>
      <h1>My skills</h1>
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
          <FaBootstrap />
        </div>
        <div className="react" data-aos="fade-up">
          <IoLogoReact />
        </div>
        <div className="ts" data-aos="fade-up">
          <SiTypescript />
        </div>
        <div className="node" data-aos="fade-up">
          <img src={nodeImage} alt="node" />
        </div>
        <div className="sql" data-aos="fade-up">
          <img src={sqlImage} alt="sql" />
        </div>
        <div className="mongo" data-aos="fade-up">
          <img src={mongoImage} alt="mongo" />
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
