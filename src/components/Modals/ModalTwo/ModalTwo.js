import React from "react";
import "./ModalTwo.css";

export default function ModalTwo(props) {
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
          <div>hey</div>
          <button onClick={onClose} className="contact-info-btn">
            Close
          </button>
        </div>
      </div>
    );
  }
}
