import React from "react";
import { CgMail } from "react-icons/cg";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
import "../css/contact.css";

function Contact() {
  return (
    <div className="fcontact">
      <div className="footer">
        <h2 className="footer-title"> Contact</h2>
      </div>
      <div className="contact-links">
        <ul>
          <li>
            <a href="mailto:lawrenceike24@gmail.com">
              <CgMail />
              lawrenceike24@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin />
              My LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Kelechi-Lawrence"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub />
              My GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Contact;
