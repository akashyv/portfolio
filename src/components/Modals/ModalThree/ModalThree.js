import React from "react";
import "./ModalThree.css";

export default function ModalThree(props) {
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
              Developed a multi-tier certification management system for
              laboratories using <b>TypeScript</b> and <b>React</b>.
            </li>
            <li>
              Implemented a complex user hierarchy with different permission
              levels:
              <ul>
                <li className="first-sub-bullet">
                  Admin users for system management
                </li>
                <li>Supervisors for application review and approval</li>
                <li>
                  Lab users for form submission and certification requests
                </li>
              </ul>
            </li>
            <li>
              Designed and built dynamic form workflows with validation and
              multi-step approval processes.
            </li>
            <li>
              Created notification systems to alert users when forms were
              approved, rejected, or required clarification.
            </li>
            <li>
              Implemented form versioning to track changes when applications
              were returned for corrections.
            </li>
            <li>
              Developed audit trails to maintain complete history of form
              submissions and approvals.
            </li>
            <li>
              Built responsive UI components with TypeScript interfaces ensuring
              type safety across the application.
            </li>
            <li>
              Collaborated closely with backend team to design API contracts and
              ensure seamless integration.
            </li>
            <li>
              Optimized form performance to handle complex validation rules and
              large datasets.
            </li>
            <li>
              Implemented role-based access control to restrict features and
              data based on user permissions.
            </li>
            <li>
              Due to the sensitive nature of this enterprise application, the
              codebase is proprietary. However, I can discuss the architecture
              and implementation details in depth upon request.
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
