import React from "react";
import "./ModalOne.css";

export default function ModalOne(props) {
  const { isOpen, onClose } = props;

  if (!isOpen) {
    return null;
  } else {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <ul>
            <li>
              Developed a clone of Duolingo, a language learning platform, from
              scratch.
            </li>
            <li>
              Solely responsible for designing and implementing the entire
              frontend of the application.
            </li>
            <li>
              Created user authentication functionality with login and signup
              pages.
            </li>
            <li>
              Implemented routing to navigate between different pages of the
              application.
            </li>
            <li>
              Designed two distinct views : one for administrators (teachers)
              and another for students.
            </li>
            <li>
              Admin view allows teachers to create questions and tests for
              students.
            </li>
            <li>
              Student view provides functionalities for taking tests and
              practicing language skills.
            </li>
            <li>
              Implemented various question types, including :
              <ul>
                <li className="first-sub-bullet">Speaking and essay writing</li>
                <li>Selecting the correct words </li>
                <li>Filling in the blanks</li>
                <li>Listening to audios and typing</li>
                <li>Speaking essays while recording video </li>
                <li>
                  And many other question types to enhance language learning
                  experience.
                </li>
              </ul>
            </li>
            <li>
              Collaborated with a backend developer to integrate the frontend
              with a working backend and database.
            </li>
            <li>
              Successfully delivered a fully functional language learning
              platform with intuitive user interfaces, currently undergoing
              refinement to enhance the overall user experience.
            </li>
          </ul>
          <button onClick={onClose} className="contact-info-btn">
            Close
          </button>
        </div>
      </div>
    );
  }
}
