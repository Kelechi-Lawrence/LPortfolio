import React from "react";
import { motion } from "framer-motion";
import "../css/footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/kelechi-Lawrence",
      icon: <FaGithub className="transition-colors" size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kelechi-okoromike-567824297",
      icon: <FaLinkedin className="transition-colors" size={20} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/callmekcee/",
      icon: <FaInstagram className="transition-colors" size={20} />,
    },
    {
      name: "Email",
      url: "mailto:lawrenceike24@gmail.com",
      icon: <FaEnvelope className="transition-colors" size={20} />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/2348108966687",
      icon: <FaWhatsapp className="transition-colors" size={20} />,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@callmekcce",
      icon: <FaTiktok className="transition-colors" size={20} />,
    },
    {
      name: "X",
      url: "https://x.com/heyitkc",
      icon: <FaTwitter className="transition-colors" size={20} />,
    },
  ];

  return (
    <footer id="footer" className="footer">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center space-y-4 px-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition-all"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-xs text-gray-300 text-center">
          © {new Date().getFullYear()} Lawrence Ike. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
