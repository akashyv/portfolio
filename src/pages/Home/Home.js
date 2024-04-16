import React from "react";
import ProfilePicture from "../../Pictures/profile-picture.jpeg";
import LinkedinLogo from "../../Pictures/linkedin.png";
import Githublogo from "../../Pictures/github.png";
import "./Home.css";

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-profile-pic-container">
        <img
          src={ProfilePicture}
          alt="Akash Yadav"
          className="home-profile-pic"
        />
      </div>
      <div className="home-intro-container">
        <p className="home-intro-p1">Hello, I'm</p>
        <h1 className="home-intro-title">Akash Yadav</h1>
        <p className="home-intro-p2">Software Engineer</p>
        <div className="home-btn-container">
          <button className="down-resume-btn">Download CV</button>
          <button className="contact-info-btn">Contact Info</button>
        </div>
        <div className="home-intro-links-container">
          <img src={LinkedinLogo} alt="LinkedIn" className="icon" />
          <img src={Githublogo} alt="GitHub" className="icon" />
        </div>
      </div>
    </section>
  );
}
