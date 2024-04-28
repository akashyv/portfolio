import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [mobMenu, setMobMenu] = useState(false);

  const toggleMenu = () => {
    setMobMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMobMenu(true);
  };

  return (
    <div id="home" className="navbar-container">
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
      <div className="hamburger-menu" onClick={toggleMenu}>
        {/*For mobile navigation*/}
        <div className="hamburger-menu-icon">
          <span
            className={`hamburger-line ${mobMenu === true ? "l1" : ""}`}
          ></span>
          <span
            className={`hamburger-line ${mobMenu === true ? "l2" : ""}`}
          ></span>
          <span
            className={`hamburger-line ${mobMenu === true ? "l3" : ""}`}
          ></span>
        </div>
        {mobMenu === true && (
          <div className="hamburger-menu-links">
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </div>
        )}
      </div>
    </div>
  );
}
