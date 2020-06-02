import types from "./types";

const initialState = {
  playerHand: [],
  playerPlayedCards: [],
  AIHand: [],
  AIPlayedCards: [],
  gameState: null,
};

const removeCardFromHand = (hand, cardToRemove) =>
  hand.filter(
    (card) =>
      card.type !== cardToRemove.type && card.number !== cardToRemove.number
  );

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_CARD_TO_PLAYER:
      return {
        ...state,
        playerHand: [...state.playerHand, payload],
      };
    case types.ADD_CARD_TO_AI:
      return {
        ...state,
        AIHand: [...state.AIHand, payload],
      };
    case types.SET_GAME_STATE:
      return {
        ...state,
        gameState: payload,
      };
    case types.REMOVE_CARD_FROM_AI:
      return {
        ...state,
        AIHand: removeCardFromHand(state.AIHand, payload),
        AIPlayedCards: [...state.AIPlayedCards, payload],
      };
    case types.REMOVE_CARD_FROM_PLAYER:
      return {
        ...state,
        playerHand: removeCardFromHand(state.playerHand, payload),
        playerPlayedCards: [...state.playerPlayedCards, payload],
      };
    default:
      return state;
  }
};

export default reducer;
