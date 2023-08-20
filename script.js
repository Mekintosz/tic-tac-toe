const gameBoard = (() => {

    let start = ["x", null, "o",
                 "o", "x", "o", 
                 "x", "x", "o"];

    let move = "cross"
    const getBoard = () => start;

    const board = document.querySelector("#board")
    const display = document.querySelector("#info")
    display.textContent = "Cross goes first."
    const setBoard = function (){
        start.forEach((_cell, index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        cellElement.id = index
        cellElement.addEventListener("click", addMove)
        board.append(cellElement)

        })
    };

    function addMove(e) {
        moveDisplay = document.createElement("div")
        moveDisplay.classList.add(move)
        e.target.append(moveDisplay)
        whoseMove()
        display.textContent = "it is now" + move + "'s move"
        e.target.removeEventListener("click", addMove)
    }

    whoseMove = () => {move = move === "cross" ? "circle" : "cross"}
    return {getBoard, setBoard}
})();

gameBoard.setBoard();

// const Player = (name, token) => {
//     const getName = () => name;
//     const getToken = () => token;

//     return {getName, getToken}
// }

// const gameController = () =>  {

//     const playerX = Player("player1", "x")
//     const playerO = Player("player2", "o")
    
//     let currentPlayer = playerX

//     const switchPlayers = () => {
//         currentPlayer = currentPlayer === playerX ? playerO : playerX;
//     };

//     const getCurrentPlayer = () => currentPlayer;

//     let markField = function(player, field) {
//         gameBoard.getBoard[field] = player.token
//     }

//     return {getCurrentPlayer, switchPlayers}
// }

// const displayController = (() => {
//     const game = gameController();
//     const board = gameBoard;
//     const boardSet = gameBoard.getBoard();
//     const fields = document.querySelectorAll(".field");
//     board.setBoard(fields);

//     const activePlayer = game.getCurrentPlayer();

//     boardSet.forEach( (field, index) => {
    
//         if (field === null){
//             const divButton = document.createElement("button");
//             divButton.classList.add("field-button");
//             const div = document.getElementById(`${index}`)
//             div.appendChild(divButton);
//         } else return
        
//     })
// })();

