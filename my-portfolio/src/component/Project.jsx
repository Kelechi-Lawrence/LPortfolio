import React from "react";
import "./project.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div id="projects" className="project-container">
        <h2 className="mproject"> Project</h2>
      </div>
      <div className="Pcontainers">
        <div className=" products e-commerce" data-aos="fade-up">
          Commerce{" "}
          <button className="b" data-aos="fade-up">
            view site
          </button>
        </div>
        <div className="products clothing" data-aos="fade-up">
          Clothing{" "}
          <button className="b" data-aos="fade-up">
            view site
          </button>
        </div>
        <div className="products artificial" data-aos="fade-up">
          Artificial{" "}
          <button className="b" data-aos="fade-up">
            view site
          </button>
        </div>
        <div className="products shopify" data-aos="fade-up">
          Shopify{" "}
          <button className="b" data-aos="fade-up">
            view site
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
