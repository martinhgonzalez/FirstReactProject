import React from "react";
import Card from "./Card";
import technologies from "../technologies";

function CardContainer(props) {
  const cardClick = e => {
    props.onClick2(e);
  };

  function createCard(technologies) {
    return (
      <Card
        key={technologies.id}
        id={technologies.id}
        name={technologies.name}
        previewText={technologies.previewText}
        img={technologies.previewImage}
        usage={technologies.usage}
        onClick={cardClick}
      />
    );
  }

  return (
    <div className="right">
      <h1>Languages and technologies</h1>
      <div className="cardContainer">{technologies.map(createCard)}</div>
    </div>
  );
}

export default CardContainer;
