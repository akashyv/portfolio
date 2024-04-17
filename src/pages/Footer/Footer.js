import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links-container">
        <div className="navbar-link">
          <a href="#about">About</a>
        </div>
        <div className="navbar-link">
          <a href="#experience">Experience</a>
        </div>
        <div className="navbar-link">
          <a href="#contact">Contact</a>
        </div>
      </div>
      <p className="footer-copyright">
        Copyright © 2024 Akash Yadav. All Rights Reserved.
      </p>
    </div>
  );
}
