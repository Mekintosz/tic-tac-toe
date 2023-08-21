const gameBoard = (() => {

    const board = document.querySelector("#board")
    const display = document.querySelector("#info")
    display.textContent = "Cross goes first."

    return {board, display}
})();

const theMoves = (() => {

    let current = {move: "cross",
                    get move() {
                                return this.move},
                    set move(value) {
                        this.move = value
                    }}
    
    const addMove = (e) => {
        moveDisplay = document.createElement("div")
        moveDisplay.classList.add(move)
        e.target.append(moveDisplay)
        checkScore()
        if ( gameBoard.display.textContent == `${theMoves.move}'s win!`) 
            return
        whoseMove()
        gameBoard.display.textContent = "it is now " + move + "'s move"
        e.target.removeEventListener("click", addMove)
    }
    
    const whoseMove = () => {move = move === "cross" ? "circle" : "cross"}
                        
    return {addMove, move}
})()

const setBoard = (() => {
    const start = ["","","","","","","","",""]
    start.forEach((_cell, index) => {
    const cellElement = document.createElement("div")
    cellElement.classList.add("square")
    cellElement.id = index
    cellElement.addEventListener("click", theMoves.addMove)
    gameBoard.board.append(cellElement)
    })
})();





const checkScore = () => {
    const allSquares = document.querySelectorAll(".square")
    const winMatch = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                      [0, 3, 6], [1, 4, 7], [2, 5, 8],
                      [0, 4, 8], [3, 5, 7]]
    
    for (let match of winMatch) {
       let win = match.every(cell => 
            allSquares[cell].firstChild?.classList.contains(theMoves.move))

            if (win) {
                gameBoard.display.textContent = `${theMoves.move}'s win!`
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return

            }
    
    }
}