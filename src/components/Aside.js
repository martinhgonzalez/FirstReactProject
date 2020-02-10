import React from "react";

function Aside() {
  return (
    <aside>
      <div className="personalInfo">
        <p>Martin Horacio Gonzalez</p>
        <p>DNI: 37719551</p>
        <p>26 years old</p>
      </div>
      <div>
        <input className="input1" placeholder="Search" type="text" />
      </div>
      <div>
        <h3>Filter by technology:</h3>
        <input name="techFilter" type="radio" />
        <label>Front-End</label>
        <br />
        <br />
        <input name="techFilter" type="radio" />
        <label>Back-End</label>
      </div>
    </aside>
  );
}

export default Aside;
