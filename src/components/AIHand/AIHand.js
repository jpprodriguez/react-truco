import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AICard from "./AICard/AICard";
import { useSelector } from "react-redux";
import { getAIHand } from "../../hooks/useGameManager/duck/selectors";

const useStyles = makeStyles({
  root: {
    width: 340,
    height: 150,
    position: "absolute",
    top: 15,
    left: `calc(50% - ${375 / 2}px)`,
    display: "flex",
    justifyContent: "space-between",
  },
});

const AIHand = () => {
  const { root } = useStyles();
  const AIHand = useSelector(getAIHand);
  const AICards = useMemo(() => AIHand.map((card) => <AICard />), [AIHand]);
  return <div className={root}>{AICards}</div>;
};

export default AIHand;
