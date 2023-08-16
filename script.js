const gameBoard = (() => {
    let board = ["x", null, "o", "o", "x", "o", "x", "x", "o"];
     const fields = document.querySelectorAll(".field");
        
        for (let i = 0; i < fields.length; i++) {
            fields[i].innerText = `${board[i]}`
        }
        let getBoard = () => board;
        let getFields = () => fields;
    return {getBoard, getFields};

})();

const playerFactory = (imie, pionek) => {
    const getImie = () => imie;
    const getPionek = () => pionek;
    const lost = () => {
        // something happens when lost
    };
    const win = () => {
        //when win
    };
    return {getImie, getPionek, lost, win}
};

const playerX = playerFactory("player1", "X")
const playerY = playerFactory("player2", "O")

const switchPlayers = () => {
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
};

const getCurrentPlayer = () => currentPlayer;



const markField = (currentPlayer, getBoard, getFields)