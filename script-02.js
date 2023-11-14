const gameBoard = (() => {

    let board = ["X", "", "", "", "X", "", "", "", "X"];

    const getBoard = () => board;
    
    const setMark = (index, mark) => {
        return board[index] = mark;
    };

    const getMark = (index) => {
        return board[index];
    };

    const resetBoard = () => {
        board.fill("", 0, 9)
    };

return { getBoard, setMark, getMark, resetBoard };

})();
    
const Player = (name, mark) => {

    let getName = () => name;
    let getMark = () => mark;

    return { getName, getMark };
};

const gameController = (() => {

    const player1 = Player("", "X");
    const player2 = Player("", "O");

    let currentPlayer = player1;

    const getCurrentPlayer = () => currentPlayer;
    const setCurrentPlayer = () => {
        currentPlayer = currentPlayer == player1 ? player2 : player1;
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
        }

    }

    const checkForDraw = () => getBoard().every( index => index ==! "" )

return { castMark, checkForWinner }

})();

console.log(gameBoard.getBoard());
console.log(gameBoard.resetBoard());
console.log(gameBoard.getBoard());
