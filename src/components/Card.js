import React from "react";
import Photo from "./Photo";

function Card(props) {
  function handleClick(e) {
    props.onClick(e.target.parentElement.value);
  }

  return (
    <div className="card">
      <div className="top">
        <button
          onClick={handleClick}
          value={props.id}
          id="myBtn"
          type="button"
          className="link-button"
        >
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
