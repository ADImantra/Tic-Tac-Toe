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
    _sign = sign
    
    const getSign = () => {
        return _sign
    }

    const setSign = (sing) => {
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

const player1 = Player(`player1`, 0);
const player2 = Player(`player2`, 0);

/*
    arr = [[(0),(1),(2)],
           [(3),(4),(5)],
           [(6),(7),(8)]]

     win conditions:
        arr[0] === arr[3] === arr[6]
        arr[1] === arr[4] === arr[7]
        arr[2] === arr[5] === arr[8]
        arr[0] === arr[1] === arr[2]
        arr[3] === arr[4] === arr[5]
        arr[6] === arr[7] === arr[8]
        arr[0] === arr[4] === arr[8]
        arr[2] === arr[4] === arr[6]
*/

