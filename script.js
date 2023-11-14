const gameBoard = (() => {
  const board = document.querySelector("#board");
  const display = document.querySelector("#info");
  display.textContent = "Cross goes first.";

  return { board, display };
})();

const Player = (name, sign) => {
  let getName = () => name;
  let getSign = () => sign;
  return { getName, getSign };
};

const player1 = Player("Marta", "cross");
const player2 = Player("Jurek", "circle");

const currentPlayer = (() => {
  let currPlayer = player1;
  let setCurrentPlayer = () => {
    currPlayer = currPlayer === player1 ? player2 : player1;
  };
  let getCurrentPlayer = () => currPlayer;

  return { setCurrentPlayer, getCurrentPlayer };
})();

const theMoves = (() => {
  const addMove = (e) => {
    moveDisplay = document.createElement("div");
    moveDisplay.classList.add(currentPlayer.getCurrentPlayer().getSign());
    e.target.append(moveDisplay);
    e.target.removeEventListener("click", addMove);
    checkScore();
    nextPlayer();
  };

  const nextPlayer = () => {
    if (
      gameBoard.display.textContent ==
      currentPlayer.getCurrentPlayer().getName()+" wins!"
    )
      return;
    currentPlayer.setCurrentPlayer();
    gameBoard.display.textContent =
      "it is now " + currentPlayer.getCurrentPlayer().getName() + "'s move";
  };

  return { addMove, nextPlayer };
})();

const setBoard = (() => {
  const start = ["", "", "", "", "", "", "", "", ""];
  start.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener(
      "click",
      theMoves.addMove,
      theMoves.nextPlayer
    );
    gameBoard.board.append(cellElement);
  });
})();

const checkScore = () => {
  const allSquares = document.querySelectorAll(".square");
  const winMatch = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let match of winMatch) {
    let win = match.every((cell) =>
      allSquares[cell].firstChild?.classList.contains(
        currentPlayer.getCurrentPlayer().getSign()
      )
    );

    if (win) {
      gameBoard.display.textContent = `${currentPlayer
        .getCurrentPlayer()
        .getName()} wins!`;
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode(true))
      );
      return;
    }
  }
};


