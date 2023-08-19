const gameBoard = (() => {

    let board = ["x", null, "o",
                 "o", "x", "o", 
                 "x", "x", "o"];

    const getBoard = () => board;

    const setBoard = function (fields){
        for (let i = 0; i < fields.length; i++) {
            fields[i].innerText = `${board[i]}`
        }
    };

    return {getBoard, setBoard}
})();

const Player = (name, token) => {
    const getName = () => name;
    const getToken = () => token;

    return {getName, getToken}
}

const gameController = () =>  {

    const playerX = Player("player1", "x")
    const playerO = Player("player2", "o")
    
    let currentPlayer = playerX

    const switchPlayers = () => {
        currentPlayer = currentPlayer === playerX ? playerO : playerX;
    };

    const getCurrentPlayer = () => currentPlayer;

    let markField = function(player, field) {
        gameBoard.getBoard[field] = player.token
    }

    return {getCurrentPlayer, switchPlayers}
}

const displayController = (() => {
    const game = gameController();
    const board = gameBoard;
    const boardSet = gameBoard.getBoard();
    const fields = document.querySelectorAll(".field");
    board.setBoard(fields);

    const activePlayer = game.getCurrentPlayer();

    boardSet.forEach( (field, index) => {
    
        if (field === null){
            const divButton = document.createElement("button");
            divButton.classList.add("field-button");
            const div = document.getElementById(`${index}`)
            div.appendChild(divButton);
        } else return
        
    })
})();

