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



const gameController = (() => {

    const player1 = Player(window.prompt("What is players X name?", "Robert"), "X");
    const player2 = Player(window.prompt("What is players O name?", "Jessica"), "O");
    let currentPlayer = player1;

    const currentPlayerController = () => {

        const getCurrentPlayer = () => currentPlayer;

        const switchCurrentPlayer = () => {
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        };

        return { getCurrentPlayer, switchCurrentPlayer }
    }

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
            let foundWinner = winingSequence.every( index => gameBoard.getBoard()[index] === currentPlayerController().getCurrentPlayer().getMark() )
           
            if (foundWinner) return true
            else return false;
        }

    }

    const checkForDraw = () => gameBoard.getBoard().every( index => index !== "" );

return { castMark, currentPlayerController, checkForWinner, checkForDraw }

})();



const displayController = (() => {

    const infoDisplayController = () => {

        const display = document.querySelector("#info");
    
        const  setDisplayText = text => display.textContent = text
    
        return { setDisplayText }
    }

    infoDisplayController().setDisplayText(`${gameController.currentPlayerController().getCurrentPlayer().getName()} starts the game`);

    const updateDisplayPlayer = () => infoDisplayController().setDisplayText(`${gameController.currentPlayerController().getCurrentPlayer().getName()} move next`);

    const updateDisplayWinner = () => infoDisplayController().setDisplayText(`${gameController.currentPlayerController().getCurrentPlayer().getName()} WINS the game!!!`);

    const updateDisplayDraw = () => infoDisplayController().setDisplayText("OXO DRAW XOX");

        const board = document.querySelector("#board");

        const updateBoard = (e) => {
            gameBoard.setMark(e.target.id, gameController.currentPlayerController().getCurrentPlayer().getMark());
            if (gameController.checkForWinner()) {
                updateDisplayWinner();
            } else if (gameController.checkForDraw()) {
                updateDisplayDraw();
            } else {
                gameController.currentPlayerController().switchCurrentPlayer();
                updateDisplayPlayer();
            }
            
        };

        const markField = (e) => {
            markDisplay = document.createElement("div");
            markDisplay.classList.add(gameController.currentPlayerController().getCurrentPlayer().getMark());
            e.target.append(markDisplay);
            e.target.removeEventListener("click", markField);
            updateBoard(e);
        };

        gameBoard.getBoard().forEach((_cell, index) => {

            const cellElement = document.createElement("div");
            cellElement.classList.add("square");
            cellElement.id = index;
            cellElement.addEventListener(
              "click", markField,
            );

            board.append(cellElement);
        });
        
   

    


})();
