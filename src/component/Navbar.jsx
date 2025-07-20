import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import "../css/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.title = "💻KC";
  }, []);

  return (
    <nav className="entire-nav">
      <div className="navbar-title">
        K<span className="skyblue">C</span>
      </div>

      <ul className={`navbar-items ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="navbar-menu">
        <span className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <IoMenu />}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
