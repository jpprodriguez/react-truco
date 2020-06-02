import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlayerCard from "./PlayerCard/PlayerCard";
import { useSelector } from "react-redux";
import { getPlayerHand } from "../../hooks/useGameManager/duck/selectors";

const useStyles = makeStyles({
  root: {
    width: 340,
    height: 150,
    position: "absolute",
    bottom: 15,
    left: `calc(50% - ${375 / 2}px)`,
    display: "flex",
    justifyContent: "space-between",
  },
});

const PlayerHand = () => {
  const { root } = useStyles();
  const hand = useSelector(getPlayerHand);
  const handCards = useMemo(
    () =>
      hand.map((card) => (
        <PlayerCard
          key={`${card.number}-${card.type}`}
          number={card.number}
          type={card.type}
        />
      )),
    [hand]
  );
  return <div className={root}>{handCards}</div>;
};

export default PlayerHand;
