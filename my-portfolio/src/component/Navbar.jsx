import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";
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
      <div className="navbar-title">KC</div>

      <ul className={`navbar-items  ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="navbar-menu">
        <span className="menu-icon" onClick={toggleMenu}>
          <IoMenu />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
