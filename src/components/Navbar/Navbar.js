import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">Akash Yadav</div>
      <div className="navbar-right">
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
    </div>
  );
}
