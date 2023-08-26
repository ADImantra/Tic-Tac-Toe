import Board from "./Classes/board.js";
import Player from "./Classes/player.js";

const gameAI = () => {

    let _diff = 0;

    const _setDifficulty = (diff) => {
        _diff = diff;
    }

    const _getDifficulty = () => _diff

    return {
        _setDifficulty,
        _getDifficulty

        }

};

const gameController = () => {

    let _players = [];
    let _mode = `AI`;

    const _manageTurn = () => {

    };

    const _setMode = () => {
        _mode = _mode === `1-Vs-1` ? `AI` : `1-Vs-1`;
    };

};

const displayController = (() => {
    const board = new Board([``, ``, ``, ``, ``, ``, ``, ``, ``, ]);
    const _gameBox = document.querySelectorAll(`.space`)

    _gameBox.forEach((element) => {
        element.addEventListener(`mousedown` , console.log(`click`))
        })

    board._printFormattedBoard()
})();


