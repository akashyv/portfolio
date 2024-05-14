import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links-container">
        <div className="navbar-link">
          <a href="#home">Home</a>
        </div>
        <div className="navbar-link">
          <a href="#about">About</a>
        </div>
        <div className="navbar-link">
          <a href="#experience">Experience</a>
        </div>
        <div className="navbar-link">
          <a href="#projects">Projects</a>
        </div>
      </div>
      <p className="footer-message">
        Got a project in mind? Let’s code it together.
      </p>
    </div>
  );
}
