import React from "react";
import "./card.styles.css";

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt={`monster ${monster.name}`}
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h1 key={monster.id}>{monster.name}</h1>
    </div>
  );
};

export default Card;
