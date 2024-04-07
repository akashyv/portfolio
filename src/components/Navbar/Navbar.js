import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">Akash Yadav</div>
      <div className="navbar-right">
        <div className="navbar-link">About</div>
        <div className="navbar-link">Experience</div>
        <div className="navbar-link">Contact</div>
      </div>
    </div>
  );
}
