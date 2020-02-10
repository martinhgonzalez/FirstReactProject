import React from "react";
import Photo from "./Photo";
import Modal from "./Modal";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <button id="myBtn" onClick="" type="button" className="link-button">
          <h2 className="name">{props.name}</h2>
        </button>
        <Photo img={props.img} />
      </div>
      <div className="bottom">
        <p>{props.previewText}</p>
      </div>
    </div>
  );
}

export default Card;
