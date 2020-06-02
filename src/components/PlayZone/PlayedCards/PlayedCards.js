import React from "react";
import PlayerCard from "../../PlayerHand/PlayerCard/PlayerCard";

const PlayedCards = ({ cards = [] }) => {
  return cards.map((card, index) => (
    <PlayerCard
      key={`${card.number}-${card.type}`}
      style={{
        top: 0,
        left: index * 10,
        zIndex: index + 1,
        position: "absolute",
      }}
      type={card.type}
      number={card.number}
    />
  ));
};

export default PlayedCards;
