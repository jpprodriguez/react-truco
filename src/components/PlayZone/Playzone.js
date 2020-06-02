import React from "react";
import { makeStyles } from "@material-ui/core";
import PlayedCards from "./PlayedCards/PlayedCards";
import { cardType } from "../../utils/utils";
import Deck from "./Deck/Deck";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: `calc(50% - ${305 / 2}px)`,
    left: `calc(50% - ${700 / 2}px)`,
    height: 305,
    width: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  PlayerZone: { position: "relative", height: "40%", width: 100 },
  AIZone: { position: "relative", height: "40%", width: 100 },
  DeckZone: { position: "absolute", top: "calc(50% - 60px)", left: 0 },
});

const PlayZone = () => {
  const { root, AIZone, PlayerZone, DeckZone } = useStyles();

  return (
    <div className={root}>
      <div className={DeckZone}>
        <Deck />
      </div>
      <div className={AIZone}>
        <PlayedCards />
      </div>
      <div className={PlayerZone}>
        <PlayedCards />
      </div>
    </div>
  );
};

export default PlayZone;
