const gameBoard = (() => {

    const _board = new Array(9)

    const getBoard = () => _board;

    const setBoard = () => {

        player = gameController.getTurn();
        move = gameController.getMove();

        if (_board[move] === undefined) {
            _board[move] = player.token;
        } else {
            console.log(`invalid space`)
            return
        }
    };

    const printBoard = () => {
        console.log(_board)
    };

    return {getBoard, setBoard, printBoard}

})();

const Player = () => {

};

const gameController = (
    (playerOneName = `Player One`, playerTwoName = `Player Two`) => {

    const _players = [
    {
        name: playerOneName,
        token: `X`
    },
    {
        name: playerTwoName,
        token: `O`
    }];

    let _move = 0;

    let _currentTurn = _players[0];

    const getTurn = () => _currentTurn;

    const setTurn = () => {
        _currentTurn = _currentTurn === _players[0] ? _players[1] : _players[0]
    };

    const getMove = () => _move;

    const setMove = () => {
        let _input = prompt(`Pick a number from 1-9`)
        _move = _input
    };


    return {getTurn, setTurn, getMove, setMove}

})();

const render = (() => {
    
    do {
        gameController.setMove();
        gameBoard.setBoard();
        gameBoard.printBoard();
        gameController.setTurn();
    } while (gameBoard.getBoard.length !== 9);
    

})();