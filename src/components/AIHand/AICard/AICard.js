import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: 80,
  },
  cardBackground: {
    width: "100%",
  },
});

const AICard = ({ ...props }) => {
  const { root, cardBackground } = useStyles();
  return (
    <div className={root} {...props}>
      <img
        className={cardBackground}
        src="card-reverse.png"
        alt="card-reverse"
      />
    </div>
  );
};

export default AICard;
