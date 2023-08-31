import Board from "./classes/board.js";
import Player from "./classes/player.js";

const board = new Board([``, ``, ``, ``, ``, ``, ``, ``, ``])
const player1 = new Player();
const player2 = new Player();

const init = () => {
    player1.setToken(`X`)
    player2.setToken(`O`)
    player1.setType(`Player`)
    player2.setType(`AI`)
};

const difficultyProbability = (percentage) => {
    
    let _percentage = percentage
    let _difficultyPercent = Math.floor(Math.random() * 100)

    return _difficultyPercent <= percentage
};

const gameOn = () => {
    
}

const domManager = (() => {
    const _container = document.querySelector(`.container`);
    const _playSpace = document.querySelector(`.playSpace`);
    const _spaces = document.querySelectorAll(`.block`);

    const _resetBoard = () => {
        const _reset = document.querySelector(`.reset`);
        _reset.addEventListener(`click`, () => {
            board._clear();
        })
    }

    return {
        _resetBoard
    }
})();

domManager._resetBoard()






