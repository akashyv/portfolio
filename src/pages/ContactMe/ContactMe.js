import React from "react";
import EmailLogo from "../../Pictures/email-logo.jpeg";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <section className="contact-me-container">
      <div className="about-me-header-container">
        <p className="header">Get In Touch</p>
        <h1 className="title">Contact Me</h1>
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
    </section>
  );
}
