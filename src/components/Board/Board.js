import React from "react";
import { makeStyles } from "@material-ui/core";
import PlayerHand from "../PlayerHand/PlayerHand";
import AIHand from "../AIHand/AIHand";
import PlayZone from "../PlayZone/Playzone";
import useGameManager from "../../hooks/useGameManager/useGameManager";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: `calc(50% - ${720 / 2}px)`,
    left: `calc(50% - ${1280 / 2}px)`,
    background: "#236921",
    height: 720,
    width: 1280,
    boxShadow: "#582828 inset 0 0 0px 10px",
  },
});

const Board = () => {
  const { root } = useStyles();
  useGameManager();

  return (
    <div className={root}>
      <PlayZone />
      <PlayerHand />
      <AIHand />
    </div>
  );
};

export default Board;
