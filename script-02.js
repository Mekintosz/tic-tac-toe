const gameBoard = () => {
    const board = ["", "", "", "", "", "", "", "", ""];
}
    
const Player = (name, sign) => {
    let getName = () => name;
    let getSign = () => sign;
    return { getName, getSign };
  };

const gameController = () => {
    
    let currentPlayer = playerX;
    let getCurrentPlayer = () => currentPlayer;
    let setCurrentPlayer = () => {
        currentPlayer = currentPlayer == playerX ? playerO : playerX;

    }
}