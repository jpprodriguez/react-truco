import types from "./types";

const addCardToPlayer = (payload) => ({
  type: types.ADD_CARD_TO_PLAYER,
  payload,
});

const addCardToAI = (payload) => ({
  type: types.ADD_CARD_TO_AI,
  payload,
});

const removeCardFromPlayer = (payload) => ({
  type: types.REMOVE_CARD_FROM_PLAYER,
  payload,
});

const removeCardFromAI = (payload) => ({
  type: types.REMOVE_CARD_FROM_AI,
  payload,
});

const setGameState = (payload) => ({
  type: types.SET_GAME_STATE,
  payload,
});

export {
  addCardToAI,
  addCardToPlayer,
  removeCardFromAI,
  removeCardFromPlayer,
  setGameState,
};
