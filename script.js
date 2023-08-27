import Board from "./classes/board.js";
import Player from "./classes/player.js";

const board = new Board([``,``,``,``,``,``,``,``,``]);
const player1 = new Player();
const player2 = new Player();


const minimaxAI = (() => {

})();

const gameController = (() => {
    const spaces = document.querySelectorAll(`.space`)

    let players = [];
    
    const _init = () => {

        player1.setToken(`X`);
        player2.setToken(`O`);

        players.push(player1);
        players.push(player2);
    };

    let activePlayer = players[0]

    const _setActivePlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    }

    const _triggerStep = () => {

        spaces.forEach((element, index) => {
            element.addEventListener(`click`, () => {

                board._placeToken(activePlayer.token, index)
                element.textContent = activePlayer.token

                if (activePlayer === players[2] && players[2].type === `AI`) {

                }

                if (board._getTerminalState()) {
                    alert(`Winner is ${activePlayer.name}`)
                } else if (board._isDraw()) {
                    alert(`it's a draw`)
                } else {
                    _setActivePlayer()
                }
            })
        })
    };

    return {
        _setActivePlayer, 
        _triggerStep,
        _init
    }
})();

gameController._init();
gameController._setActivePlayer();
gameController._triggerStep();



