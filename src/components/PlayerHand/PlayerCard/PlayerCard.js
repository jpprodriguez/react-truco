import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { cardType } from "../../../utils/utils";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: 80,
  },
  cardBackground: {
    width: "100%",
  },
  cardNumber: {
    position: "absolute",
    top: 10,
    left: 15,
    fontSize: 20,
    fontWeight: 600,
    color: "#58584d",
  },
  cardType: {
    position: "absolute",
    width: 25,
    height: 65,
    top: 40,
    left: "calc(50% - 12.5px)",
  },
});

const { SWORD, CLUB, GOLD, CUP } = cardType;

const cardImg = {
  [SWORD]: "sword-symbol.png",
  [CLUB]: "club-symbol.png",
  [GOLD]: "gold-symbol.png",
  [CUP]: "cup-symbol.png",
};

const PlayerCard = ({ number, type, ...rest }) => {
  const { root, cardBackground, cardNumber, cardType } = useStyles();
  return (
    <div className={root} {...rest}>
      <img
        className={cardBackground}
        src="card-background.png"
        alt="card-background"
      />
      <span className={cardNumber}>{number}</span>
      <img className={cardType} src={cardImg[type]} alt="card-type" />
    </div>
  );
};

export default PlayerCard;
