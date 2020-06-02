import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameState, getNewHand, generateTrucoDeck } from "../../utils/utils";
import { addCardToPlayer, addCardToAI, setGameState } from "./duck/actions";
import { getGameState } from "./duck/selectors";

const { DRAWING_CARDS, PLAYER_TURN, OPPONENT_TURN } = gameState;

const useGameManager = () => {
  const dispatch = useDispatch();
  const currentGameState = useSelector(getGameState);

  const drawCards = useCallback(() => {
    const deck = generateTrucoDeck();
    const AIHand = getNewHand(deck);
    const playerHand = getNewHand(deck);
    let AIindex = 0;
    let playerIndex = 0;
    for (let x = 1; x <= 6; x++) {
      if (x % 2 === 0) {
        setTimeout(
          (index) => {
            dispatch(addCardToPlayer(playerHand[index]));
          },
          x * 1000,
          playerIndex
        );
        playerIndex++;
      } else {
        setTimeout(
          (index) => {
            dispatch(addCardToAI(AIHand[index]));
          },
          x * 1000,
          AIindex
        );
        AIindex++;
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (dispatch) {
      alert("Comienzo de partida");
      dispatch(setGameState(DRAWING_CARDS));
    }
  }, [dispatch]);

  useEffect(() => {
    switch (currentGameState) {
      case DRAWING_CARDS:
        drawCards();
        break;
      /*       case PLAYER_TURN:
        alert("Your Turn");
        setPlayerCardsEnabled(true);
        break;
      case OPPONENT_TURN:
        alert("Opponent's Turn");
        setPlayerCardsEnabled(false);
        RunAINextMove();
        break; */
      default:
    }
  }, [currentGameState, drawCards]);
};

export default useGameManager;
