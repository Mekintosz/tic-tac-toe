const gameBoard = (() => {
    let board = ["x", null, "o", "o", "x", "o", "x", "x", "o"];
})();

const Player = (imie, pionek) => {
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

