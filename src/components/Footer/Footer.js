import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <span className="made-by">Made by Žymantas Ponelis</span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/zymantasponelis"
        >
          GitHub
        </a>
        •
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://linkedin.com/in/žymantas-ponelis"
        >
          LinkedIn
        </a>
      </span>
    </footer>
  );
};

export default Footer;
