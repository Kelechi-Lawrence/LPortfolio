import React, { useEffect, useState } from "react";
import "../css/project.css";
import AOS from "aos";
import "aos/dist/aos.css";
import portfolioData from "../Data/portfolio.json";
import { FaGithub } from "react-icons/fa";
const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => (
          <div key={idx} className="image-box" data-aos="fade-up">
            <img src={port.cover} alt="portfolio" className="portfolio-image" />
            <div className="content">
              <p className="title">{port.title}</p>
              <h4 className="description">{port.description}</h4>
              <button
                className="btn"
                onClick={() => window.open(port.url, "_blank")}
              >
                View <FaGithub className="transition-colors" size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          {" "}
          My <span className="skyblue">Projects</span>
        </h1>
        <h2 className="text-white text-center font-bold m-4 text-lg">
          <span className="skyblue">Note:</span> More projects are available on
          my GitHub.
        </h2>
        <div className="top">{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
    </>
  );
};

export default Project;
