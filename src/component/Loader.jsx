import React from "react";
import "../css/loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-center">
        <div className="spinner"></div>
        <div className="navbar-title logo-inside-loader">
          K<span className="skyblue">C</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
