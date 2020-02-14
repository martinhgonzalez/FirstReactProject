import React from "react";
import Chart from "./Chart";

function CardExtendedInfo(props) {
  const back = () => {
    props.goBackFunc();
  };

  return (
    <div className="extendedInfo">
      <div className="extendedTop">
        <button onClick={back} type="button" className="link-button">
          <h4 className="nameExtended goBack">Go back</h4>
        </button>
      </div>
      <img className="fullImage" src={props.fullImage} alt="img" />
      <p className="fullText">{props.fullText}</p>
      <h4 className="nameExtended">{props.name}</h4>
      <div>
        <Chart />
      </div>
    </div>
  );
}

export default CardExtendedInfo;
