const getGameState = (store) => store.gameState;

const getPlayerHand = (store) => store.playerHand;

const getAIHand = (store) => store.AIHand;

const getPlayerPlayedCards = (store) => store.playerPlayedCards;

const getAIPlayedCards = (store) => store.AIPlayedCards;

export {
  getGameState,
  getPlayerHand,
  getAIHand,
  getPlayerPlayedCards,
  getAIPlayedCards,
};
