import React from "react";

function Aside() {
  return (
    <aside>
      <div className="personalInfo">
        <p>MARTIN HORACIO GONZALEZ</p>
        <p>DNI: 37719551</p>
        <p>26 YEARS OLDS</p>
      </div>
      <div>
        <input className="input1" placeholder="Search in cards" type="text" />
      </div>
      <div className="input2">
        <h3>Filter by:</h3>
        <br />

        <label>
          <input name="techFilter" type="radio" />
          Frontend
        </label>
        <br />
        <br />
        <br />

        <label>
          {" "}
          <input name="techFilter" type="radio" />
          Backend
        </label>
      </div>
    </aside>
  );
}

export default Aside;
