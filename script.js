const gameBoard = () => {

    let board = ["x", null, "o",
                 "o", "x", "o", 
                 "x", "x", "o"];

    let getBoard = () => board;

    let markField = function(player, field) {
        board[field] = player.token
    }

    return getBoard, markField;
};


function gameControler() {

    const playerX = {
        name = "player1",
        token = "x"
    }

    const playerO = {
        name = "player2",
        token = "o"
    }

    let currentPlayer = playerX
    const switchPlayers = () => {
        currentPlayer = currentPlayer === playerX ? playerO : playerX;
    };

    const getCurrentPlayer = () => currentPlayer;

    const game

    return getCurrentPlayer, switchPlayers
}

const fields = document.querySelectorAll(".field");
        
     const setBoard = function(fields){
        for (let i = 0; i < fields.length; i++) {
            fields[i].innerText = `${board[i]}`
        }