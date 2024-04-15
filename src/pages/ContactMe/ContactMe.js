import React from "react";
import EmailLogo from "../../Pictures/email-logo.jpeg";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <div className="contact-me-container">
      <div className="about-me-header-container">
        <div className="about-me-header">Get In Touch</div>
        <div className="about-me-title">Contact Me</div>
      </div>
      <div className="contact-me-details-container">
        <div className="email-container">
          <img src={EmailLogo} alt="email-logo" className="email-logo" />
          <div className="contact-detail">akash104g@gmail.com</div>
        </div>
        <div className="email-container">
          <img src={EmailLogo} alt="email-logo" className="email-logo" />
          <div className="contact-detail">LinkedIn</div>
        </div>
      </div>
    </div>
  );
}
