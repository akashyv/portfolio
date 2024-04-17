import React from "react";
import EmailLogo from "../../Pictures/email.png";
import LinkedInLogo from "../../Pictures/linkedin.png";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <section className="contact-me-container">
      <p className="header">Get In Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-me-details-container">
        <div className="email-container">
          <img src={EmailLogo} alt="Email Icon" className="icon email-icon" />
          <p>
            <a
              href="https://www.linkedin.com/in/akash-yadav-409459178/"
              className="contact-detail"
            >
              akash104g@gmail.com
            </a>
          </p>
        </div>
        <div className="email-container">
          <img src={LinkedInLogo} alt="LinkedIn Icon" className="icon" />
          <p>
            <a
              href="https://www.linkedin.com/in/akash-yadav-409459178/"
              className="contact-detail"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
