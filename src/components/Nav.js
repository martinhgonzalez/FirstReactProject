import React from "react";

function Nav(props) {
  return (
    <nav>
      <button
        onClick={props.clickedIcon}
        type="button"
        className="link-button "
      >
        <img
          className="reactIcon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/245px-React.svg.png"
          alt="React img"
        ></img>
      </button>
    </nav>
  );
}

export default Nav;
