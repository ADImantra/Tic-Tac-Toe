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


const domManager = (() => {
    const _container = document.querySelector(`.container`);
    const _playSpace = document.querySelector(`.playSpace`);
    const _spaces = document.querySelectorAll(`.block`);
    

    const _resetBoard = () => {
        const _reset = document.querySelector(`.reset`);
        _reset.addEventListener(`click`, () => {
            _spaces.forEach(space => {
                space.textContent = ``
            })

            board._clear();
        })
    };

    const _triggerStep = () => {
        _spaces.forEach((space, index) => space.addEventListener(`click`, () => {

            board._placeToken(player1.token, parseInt(index));

            space.textContent = player1.token;
            space.classList.add(`taken`)

            if (!board._getTerminalState().terminal) {
                _aiMoveManager();
            }

        }))
    }

    const _aiMoveManager = () => {
        
        let _aiMove = player2.getBestMove(board, false);

        console.log(_aiMove);

        _spaces[parseInt(_aiMove)].textContent = player2.token;
        _spaces[parseInt(_aiMove)].classList.add(`taken`)

        board._placeToken(player2.token, parseInt(_aiMove));
        
    };

    return {
        _resetBoard,
        _triggerStep,
        _aiMoveManager
    }
})();


init()
domManager._resetBoard()
domManager._triggerStep();







