const gameBoard = (() => {

    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;
    
    const setMark = (index, mark) => board[index] = mark;

    const getMark = (index) => board[index];

    const resetBoard = () => board.fill("", 0, 9);

return { getBoard, setMark, getMark, resetBoard };

})();
    
const Player = (name, mark) => {

    let getName = () => name;

    let getMark = () => mark;

    return { getName, getMark };
};

const player1 = Player("mmmmm", "X");
const player2 = Player("dhdshe", "O");

const gameController = (() => {

    let currentPlayer = player1;

    const getCurrentPlayer = () => currentPlayer;

    const switchCurrentPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const castMark = (indexToMark) => {
        gameBoard.setMark(indexToMark, currentPlayer.getMark());
    };

    const checkForWinner = () => {

        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        
        for (let winingSequence of winningCombinations) {
            let foundWinner = winingSequence.every( index => gameBoard.getBoard()[index] === getCurrentPlayer().getMark() )
           
            if (foundWinner) return true
            else return false;
        }

    }

    const checkForDraw = () => gameBoard.getBoard().every( index => index !== "" );

return { castMark, getCurrentPlayer, checkForWinner, checkForDraw, switchCurrentPlayer }

})();

const displayController = (() => {
    const board = document.querySelector("#board");
  const display = document.querySelector("#info");
  display.textContent = "Cross goes first.";
})();


