import React from "react";

function Modal(props) {
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span onClick="" class="close">
          &times;
        </span>
        <img src={props.fullImage} alt="img" />
        <p>{props.name}</p>
        <p>{props.fullText}</p>
        <p>{props.usage}</p>
      </div>
    </div>
  );
}

export default Modal;
