const cardType = Object.freeze({
  SWORD: "sword",
  CUP: "cup",
  CLUB: "club",
  GOLD: "gold",
});

const gameState = Object.freeze({
  DRAWING_CARDS: "drawingCards",
  OPPONENT_TURN: "opponentTurn",
  PLAYER_TURN: "playerTurn",
});

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const generateTrucoDeck = () => {
  const cardNumbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
  const cardTypes = [
    cardType.SWORD,
    cardType.GOLD,
    cardType.CUP,
    cardType.CLUB,
  ];
  const deck = [];

  for (const type of cardTypes) {
    for (const number of cardNumbers) {
      deck.push({ number, type });
    }
  }
  shuffle(deck);
  console.log(deck);
  return deck;
};

const getNewHand = (deck) => {
  const hand = [];
  for (let i = 0; i <= 2; i++) {
    hand.push(deck.pop());
  }
  return hand;
};

export { cardType, gameState, generateTrucoDeck, getNewHand };
