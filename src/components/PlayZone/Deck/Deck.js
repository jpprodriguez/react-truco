import React from "react";

import AICard from "../../AIHand/AICard/AICard";

const Deck = () => {
  return [1, 2, 3, 4, 5].map((value) => (
    <AICard
      key={value}
      style={{
        top: 0,
        left: value,
        zIndex: value,
        position: "absolute",
      }}
    />
  ));
};

export default Deck;
