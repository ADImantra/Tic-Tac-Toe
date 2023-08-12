const gameBoard = (() => {
    const _board = new Array(9)

    const getSquare = (space) => {
        return _board[space]
    };

    const setSquare = (space, player) => {
        _board[space] = player.getSign();
    }

    const clear = () => {
        for (let i = 0; i < _board.length; i++) {
            _board[i] = undefined;
        }
    }


    return {getSquare, setSquare, clear}
})();

const Player = (sign) => {
    let _sign = sign

    const getSign = () => {
        return _sign
    }

    const setSign = (sign) => {
        _sign = sign;

    }


};

const gameMaster = (() => {
    const roundWin = () => {
        /**/
    };

    const gameWin = () => {
        /**/
    };

})();

const player1 = Player(`X`)

const render = (() => {
    const gameField = Array.from(document.querySelectorAll(`button.square`))

    const initialize = (() => {
        gameField.forEach((e) => {
            e.addEventListener(`click`, () => {
                gameBoard.setSquare(e, player1)
            })
        })
    })();
})();
