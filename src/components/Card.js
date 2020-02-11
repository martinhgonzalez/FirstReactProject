import React from "react";
import Photo from "./Photo";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <button id="myBtn" type="button" className="link-button">
          <Photo img={props.img} />
        </button>
      </div>
      <div className="bottom">
        <p>{props.previewText}</p>
      </div>
    </div>
  );
}

export default Card;
