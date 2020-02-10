import React from "react";
import Card from "./Card";
import technologies from "../technologies";

function createCard(technologies) {
  return (
    <Card
      key={technologies.id}
      name={technologies.name}
      previewText={technologies.previewText}
      img={technologies.previewImage}
      usage={technologies.usage}
    />
  );
}

function Main() {
  return (
    <main>
      <h1>Languages and technologies</h1>
      <div className="cardContainer">{technologies.map(createCard)}</div>
    </main>
  );
}

export default Main;
