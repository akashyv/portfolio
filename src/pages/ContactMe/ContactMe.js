import React from "react";
import EmailLogo from "../../Assets/email.png";
import LinkedInLogo from "../../Assets/linkedin.png";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <section id="contact" className="contact-me-container">
      <p className="header">Get In Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-me-details-container">
        <div className="contact-info-container">
          <img
            src={LinkedInLogo}
            alt="LinkedIn Icon"
            className="icon linkedin-icon"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/akashyv/"
              className="contact-detail"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img src={EmailLogo} alt="Email Icon" className="icon email-icon" />
          <p>
            <a
              href="mailto:akash104g@gmail.com"
              className="contact-detail"
              target="_blank"
              rel="noopener noreferrer"
            >
              akash104g@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
