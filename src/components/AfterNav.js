import React from "react";
import Aside from "./Aside";
import Main from "./Main";

class AfterNavContainer extends React.Component {
  render() {
    return (
      <div className="afterNavContainer">
        <Aside />
        <Main />
      </div>
    );
  }
}

export default AfterNavContainer;
