import React from "react";
import Card from "./Card";
import technologies from "../technologies";

function CardContainer(props) {
  const cardClick = e => {
    props.onClick2(e);
  };

  function createCard(technology) {
    if (
      (props.radioUpdates === null ||
        props.radioUpdates === technology.usage) &&
      (props.searchUpdates === null ||
        technology.fullText
          .toLowerCase()
          .search(props.searchUpdates.toLowerCase()) !== -1)
    ) {
      return (
        <Card
          key={technology.id} 
          id={technology.id}
          name={technology.name}
          previewText={technology.previewText}
          img={technology.previewImage}
          usage={technology.usage}
          onClick={cardClick}
        />
      );
    }
  }

  return (
    <div className="right">
      <h1>Languages and technologies</h1>
      <div className="cardContainer">{technologies.map(createCard)}</div>
    </div>
  );
}

export default CardContainer;
