import React from "react";
import "./Home.css";
import ProfilePicture from "../../Pictures/profile-picture.jpeg";
import LinkedinLogo from "../../Pictures/linkedin-logo.png";
import Githublogo from "../../Pictures/github-logo.png";

export default function Home() {
  return (
    <div className="home-container">
      <img src={ProfilePicture} alt="profile-pic" className="profile-picture" />
      <div className="intro-container">
        <div className="intro-hello">Hello, I'm</div>
        <div className="intro-name">Akash Yadav</div>
        <div className="intro-prof">Software Engineer</div>
        <div className="intro-btn-container">
          <div>
            <button className="down-resume-btn">Download CV</button>
          </div>
          <div>
            <button className="contact-info-btn">Contact Info</button>
          </div>
        </div>
        <div className="intro-links-container">
          <img
            src={LinkedinLogo}
            alt="linkedin-logo"
            className="linkedin-logo"
          />
          <img src={Githublogo} alt="github-logo" className="github-logo" />
        </div>
      </div>
    </div>
  );
}
