import React from "react";
import ProfilePicture from "../../Assets/profile-picture-1.jpg";
import LinkedinLogo from "../../Assets/linkedin.png";
import Githublogo from "../../Assets/github.png";
import ResumePDF from "../../Assets/Akash-Yadav-Resume.pdf";
import "./Home.css";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.setAttribute("download", "Akash Yadav's Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <p className="home-intro-p2">Senior Software Engineer</p>
        <div className="home-btn-container">
          <div>
            <button className="down-resume-btn" onClick={handleDownload}>
              Download CV
            </button>
          </div>
          <div>
            <a href="#contact">
              <button className="contact-info-btn">Contact Info</button>
            </a>
          </div>
        </div>
        <div className="home-intro-links-container">
          <a
            href="https://www.linkedin.com/in/akashyv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinLogo} alt="LinkedIn" className="icon" />
          </a>
          <a
            href="https://github.com/akashyv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Githublogo} alt="GitHub" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
