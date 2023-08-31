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
    return board._getTerminalState();
}

const domManager = (() => {
    const _container = document.querySelector(`.container`);
    const _playSpace = document.querySelector(`.playSpace`);
    

    const _resetBoard = () => {
        const _reset = document.querySelector(`.reset`);
        _reset.addEventListener(`click`, () => {
            board._clear();
        })
    };

    const _triggerStep = () => {
        const _spaces = document.querySelectorAll(`.block`);
        _spaces.forEach((space, index) => space.addEventListener(`click`, () => {
            if (!board._getTerminalState(player1.token).terminal || !board._getTerminalState(player2.token).terminal) {
                board._placeToken(player1.token, index)
                space.textContent = player1.token
                board._placeToken(player2.token, parseInt(player2.getBestMove(board)))
                space.textContent = player2.token
            }
            
        }))
    }

    return {
        _resetBoard,
        _triggerStep
    }
})();

init()
domManager._resetBoard()
domManager._triggerStep();







